import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { PuntuacionInterface } from 'src/app/clases/Puntuacion';
import { Router } from '@angular/router';
// import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';

@Component({
  selector: 'app-memoriza-las-teclas',
  templateUrl: './memoriza-las-teclas.component.html',
  styleUrls: ['./memoriza-las-teclas.component.scss']
})
export class MemorizaLasTeclasComponent implements OnInit {

  public codes = new Array();
  public palabras: Array<string> = ['Oso', 'Casa', 'Banana', 'Sapo', 'Perro', 'Palabra', 'Calendario', 'Murcielago', 'Arteriosclerosis'];
  public palabra: String;
  public indexPalabra: number;
  public indexLetra: number;
  public lastChar: number;
  public input: string;
  public timeLeft: number;
  public interval;
  public lastKeyCode: number;
  public cantidadPalabras: number;
  public palabraInput;
  public deshabilitado = false;
  public puntuacion = 0;

  constructor(private usuarioServe: UsuarioService, private dataApi: DataApiService, private router: Router) {
    this.cantidadPalabras = 9;
    this.palabra = this.palabras[0];
    this.indexPalabra = 0;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ReiniciarJuego() {
    this.palabra = this.palabras[0];
    this.indexPalabra = 0;
    this.puntuacion = 0;
    this.deshabilitado = false;
    document.getElementById("palabraInput")["value"] = "";
    document.getElementById("btnRestart")["style"]["display"] = "none";
    this.ReiniciarAttr();
    window.setTimeout(function () {
      document.getElementById('palabraInput').focus();
    }, 0);
  }

  ReiniciarAttr() {
    this.lastKeyCode = -1;
    this.indexLetra = 0;
    this.palabra = this.palabras[this.indexPalabra];
    this.lastChar = 0;
    this.input = "";
    clearInterval(this.interval);
    this.timeLeft = 60;
    this.StartTimer();
  }

  ngOnInit() {
    //completamos el array con los cod de todas las letras

    //primero le agregamos el cod de la Ñ al primer objeto del array
    this.codes[0] = new Array(2);
    this.codes[0][0] = 209;

    //luego a lo demás
    let index = 1;
    for (let code = 65; code <= 90; code++) {
      this.codes[index] = new Array(2);
      this.codes[index][0] = code;
      index++;
    }

    this.CodsAleatorios();
    setTimeout(() => {
      Swal.fire("Bienvenido a Memokey!\n\nTu objetivo es completar la palabra indicada en un minuto, pero las letras NO ESTÁN DONDE DEBERÍAN!\n\nTené en cuenta que solo se puede escribir una letra a la vez, asique si no le embocás, tenes que borrarla para escribir otra, podes borrar de la manera tradicional o apretando la misma tecla dos veces!\n\nSuerte!").then(() => {
        this.ReiniciarAttr();
        document.getElementById("palabraInput").focus();
      });
    }, 1000);
  }

  onKeyDown(event) {
    return false;
  }

  onKeyUp(event) {

    let value = document.getElementById("palabraInput")["value"];

    //let value = palabraInput.value;

    //USAR NGMODEL
    let charCode = event.keyCode;

    if (charCode === 8) {
      this.input = value.replace(new RegExp(value.charAt(this.lastChar) + '$'), "");
      document.getElementById("palabraInput")["value"] = this.input;
      this.lastKeyCode = -1;
    }
    else if ((charCode >= 65 && charCode <= 90) || charCode === 192) {

      charCode = charCode === 192 ? 209 : charCode;

      for (let i = 0; i < this.codes.length; i++) {
        if (this.codes[i][0] == charCode) {
          charCode = this.codes[i][1];
          break;
        }
      }

      if (this.lastKeyCode == charCode) {
        this.input = value.replace(new RegExp(value.charAt(this.lastChar) + '$'), "");
        document.getElementById("palabraInput")["value"] = this.input;
        this.lastKeyCode = -1;
        return false;
      }

      if (this.input.length == this.indexLetra + 1) {
        return false;
      }

      this.input += String.fromCharCode(charCode);

      document.getElementById("palabraInput")["value"] = this.input;
      if (this.input.length <= this.palabra.length) {
        if (this.palabra[this.indexLetra].toUpperCase() == String.fromCharCode(charCode)) {

          if (this.input.length == this.palabra.length) {
            clearInterval(this.interval);
            this.SiguientePalabra();
            return false;
          }

          this.lastKeyCode = -1;
          this.lastChar++;
          this.indexLetra++;
        }
        else {
          this.lastKeyCode = charCode;
        }
      }
    }
    else {
      return false;
    }
  }

  CodsAleatorios() {
    let aleatoryIndex: number;
    let indexUsados: Array<Number> = new Array<Number>();

    for (let code of this.codes) {
      do {
        //obtenemos un numero entre 0 y 26 que es la cantidad de codigos que tenemos
        aleatoryIndex = Math.floor(Math.random() * 27);
        //hacemos esto para que no tengamos el mismo codigo en diferentes teclas
      } while (indexUsados.includes(aleatoryIndex));

      //con ese numero aleatorio como index, buscamos el codigo del array que le corresponde y se lo ponemos al segundo item de cada item del array
      code[1] = this.codes[aleatoryIndex][0];
      indexUsados.push(aleatoryIndex);
    }
  }

  SiguientePalabra() {
    this.deshabilitado = true;
    setTimeout(() => {
      if (this.indexPalabra == this.cantidadPalabras - 1) {
        Swal.fire({
          title: 'Ganaste!',
          animation: false,
          type: 'success',
          customClass: {
            popup: 'animated tada'
          }
        })
        this.guardarResultados();
        this.deshabilitado = true;
        document.getElementById("btnRestart")["style"]["display"] = "block";
      }
      else {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: "Palabra completada! La que sigueee",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.puntuacion += 100;
          this.indexPalabra++;
          document.getElementById("palabraInput")["value"] = "";
          this.ReiniciarAttr();
          this.CodsAleatorios();
        });
      }
    }, 1000);
    this.deshabilitado = false;
    document.getElementById("palabraInput").focus();
  }

  StartTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        Swal.fire({
          title: 'Se acabó el tiempo, PERDISTE',
          animation: false,
          type: 'error',
          customClass: {
            popup: 'animated tada'
          }
        });
        this.guardarResultados();
        this.deshabilitado = true;
        document.getElementById("btnRestart")["style"]["display"] = "block";
      }
    }, 1000)
  }

  salir() {
    this.router.navigate(['/juegos']);
  }

  guardarResultados() {
    if (this.puntuacion > 0) {
      let img = "assets/imagenes/default-user.png";
      let nombre = "Anónimo";

      if (this.usuarioServe.usuario.Nombre != "") {
        img = this.usuarioServe.usuario.ImagenUrl;
        nombre = this.usuarioServe.usuario.Nombre;
      }

      let puntos: PuntuacionInterface = {
        ImagenUrl: img,
        Jugador: nombre,
        Juego: "Memokey",
        Puntuacion: this.puntuacion.toString()
      }

      this.dataApi.AgregarUno(puntos, "puntuacion");
    }
  }
}
