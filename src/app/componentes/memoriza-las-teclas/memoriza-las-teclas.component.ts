import { Component, OnInit } from '@angular/core';
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';

@Component({
  selector: 'app-memoriza-las-teclas',
  templateUrl: './memoriza-las-teclas.component.html',
  styleUrls: ['./memoriza-las-teclas.component.css']
})
export class MemorizaLasTeclasComponent implements OnInit {

  //public palabras:{ [palabra:string] : {asciiCode:number} } = {};

  public codes = new Array();
  public palabras:Array<string> = ['Oso', 'Casa', 'Banana', 'Sapo', 'Perro', 'Palabra','Calendario', 'Murcielago']; 
  public palabra:String;
  public indexPalabra:number;
  public indexLetra:number;
  public lastChar:number;
  public input:string;

  constructor() 
  {
    this.palabra = this.palabras[0];
    this.indexPalabra = 0;
    this.ReiniciarAttr();
  }

  ReiniciarAttr() {
    this.indexLetra = 0;
    this.palabra = this.palabras[this.indexPalabra];
    this.lastChar = 0;
    this.input = "";
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
  }

  onKeyDown(event) {
    return false;
  }

  onKeyUp(event) {
    
    let value = document.getElementById("palabraInput")["value"];
    let charCode = event.keyCode;

    if(charCode === 8) {
      this.input = value.replace(new RegExp(value.charAt(this.lastChar) + '$'), "");
      //this.input = value.replace(value.charAt(this.lastChar), "");
      document.getElementById("palabraInput")["value"] = this.input;
    }
    else if ((charCode >= 65 && charCode <= 90) || charCode === 192) {
      
      if(this.input.length == this.indexLetra+1) {
        return false;
      }

      charCode = charCode === 192 ? 209 : charCode;

      for (let i = 0; i < this.codes.length; i++) {
        if(this.codes[i][0] == charCode) {
          charCode = this.codes[i][1];
          break;
        }
      }

      this.input += String.fromCharCode(charCode);
      //newWord = value.replace(value.charAt(this.lastChar), String.fromCharCode(charCode));
      document.getElementById("palabraInput")["value"] = this.input;
      
      if(this.input.length <= this.palabra.length) {
        if(this.palabra[this.indexLetra].toUpperCase() == String.fromCharCode(charCode)) {
          
          if(this.input.length == this.palabra.length)
          {
            this.SiguientePalabra();
            return false;
          }

          this.lastChar++;
          this.indexLetra++;
        }
      }
    }
    else {
      return false;
    }
  }

  CodsAleatorios() {
    let aleatoryIndex:number;
    let indexUsados:Array<Number> = new Array<Number>();

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

    if(this.indexPalabra == 7){
      alert("Ganaste, fin del juego.");
      document.getElementById("palabraInput")["disabled"] = true;
    }
    else {
      alert("Palabra completada! Que venga la siguiente");
      this.indexPalabra++;
      document.getElementById("palabraInput")["value"] = "";
      this.ReiniciarAttr();
      this.CodsAleatorios();
    }
  }
}
