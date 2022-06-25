import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  user = {
    nombre: 'miguel',
    correo: 'mga@gmail.con',
    apellido: 'gamez',
    pais:'',

  }
  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe(paises => {
        console.log(paises);
        this.paises=paises;
        this.paises.unshift({
          nombre:'[seleccione pais]',
          codigo:''
        })
      });
  }
  guardar(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        console.warn("en el control");
        control.markAllAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }


}
