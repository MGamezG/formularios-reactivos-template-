import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  // forma:FormGroup;
  forma!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm(){
    this.forma=this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(5) ]],//validadores sincronos, se pueden hacer inmediatamente sin requeri de servicios web
      apellido:['',[Validators.required,Validators.minLength(5) ]],
      correo:['',[Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }
  save(){
    console.log(this.forma)
  }

}
