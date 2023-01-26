import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }
  
  notValidName(): boolean{
    return this.myForm?.controls['producto']?.invalid &&
      this.myForm?.controls['producto']?.touched
  }
  save(myForm: NgForm) {
    console.log(myForm);
  }
  
}
