import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  // forma:FormGroup;
  forma!: FormGroup;

  constructor(private fb: FormBuilder, private validadores:ValidadoresService) {
    this.createForm();
    this.chargeData();
   }

  ngOnInit(): void {
  }
  get nameNotValid(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }
  get surnameNotValid(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }
  get emailNotValid(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
  }
  get districtNotValid(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched
  }
  get cityNotValid(){
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched
  }
  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  createForm(){
    this.forma=this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(5),this.validadores.noMiguel ]],//validadores sincronos, se pueden hacer inmediatamente sin requeri de servicios web
      apellido:['',[Validators.required,Validators.minLength(5) ]],
      correo:['',[Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion:this.fb.group({
        distrito:['',Validators.required],
        ciudad:['',Validators.required]
      }),
     pasatiempos:this.fb.array([])
    });
  }
  chargeData(){
  //   this.forma.setValue({
  //     nombre:'miguel',
  //     apellido:'gamez',
  //     correo: "practicante@gta.ai",
  //     direccion: {
  //     distrito: "fsdfsdfs",
  //     ciudad: "fsadfas"
  //          }
  //   });
  this.forma.setValue({
    nombre:'miguel',
    apellido:'gamez',
    correo: "practicante@gta.ai",
    direccion: {
    distrito: "fsdfsdfs",
    ciudad: "fsadfas"
              }
         });
  }
  addPasatiempo(){
    this.pasatiempos.push(this.fb.control(''));
  }
  deletePasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }
  save(){
    console.log(this.forma)
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAllAsTouched());
        }else{
          control.markAllAsTouched();
        }
        console.warn("en el control");

      });
    }
    // this.forma.reset({

    // });
  }

}
