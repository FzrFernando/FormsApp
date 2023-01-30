import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})

export class DinamicosComponent {

  @ViewChild('myForm') myForm!: NgForm;

  persona : Persona = { nombre: 'Manuel', favoritos: [{id : 1, nombre: 'Star Wars'}, {id : 2, nombre: 'Marvel'}]}

  save() {
    console.log('formulario posteado');
  }

  notValid(campo: string):boolean{
    return this.myForm?.controls[campo]?.invalid &&
          this.myForm?.controls[campo]?.touched
  }

  delete(index : number){
    this.persona.favoritos.splice(index,1);
  }

  add(){
    this.persona.favoritos.push();
  }
}
