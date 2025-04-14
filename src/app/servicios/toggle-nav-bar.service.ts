import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleNavBarService {
  private mensaje = new BehaviorSubject<string>("");
  mensaje$ = this.mensaje.asObservable();

  constructor() { }

  enviarDatos(dato:string){
    this.mensaje.next(dato);
  }
}
