import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  // forma:FormGroup;
  forma:any;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm(){
    this.forma=this.fb.group({
      nombre:[''],
      apellido:[''],
      correo:[''],
    })
  }
  save(){
    console.log(this.forma)
  }

}
