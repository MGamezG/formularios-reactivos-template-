import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }
  noMiguel( control:FormControl):{[s:string]:boolean}{
    if(control.value?.toLowerCase()==='miguel'){
      return{
        noMiguel:false
      }
    }
    return null;
  }
}
