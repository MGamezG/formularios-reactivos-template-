import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  user={
    nombre:'miguel',
    correo:'mga@gmail.con',
    apellido:'gamez'
  }

  constructor() { }

  ngOnInit(): void {
  }
  guardar(forma:NgForm){
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control=>{
        console.warn("en el control");
        control.markAllAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }


}
