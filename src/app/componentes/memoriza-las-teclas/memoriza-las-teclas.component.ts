import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoriza-las-teclas',
  templateUrl: './memoriza-las-teclas.component.html',
  styleUrls: ['./memoriza-las-teclas.component.css']
})
export class MemorizaLasTeclasComponent implements OnInit {

  public palabras:{ [palabra:string] : {asciiCode:number} } = {};

  constructor() { }

  ngOnInit() {
    
  }

  onKeydown(event) {
    //console.log(event.keyCode);
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 192|| event.keyCode === 8) {
      console.log("funciona");
    }
    else {
      return false;
    }
  }
}
