//Servicio cuyo uso evita que la barra de navegación y header se muestren en la página principal, que cuenta con la suya propia

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleNavBarService {
  private mensaje = new BehaviorSubject<string>("");
  mensaje$ = this.mensaje.asObservable(); //recibe y envía la información a app.component.ts para indicar que la barra de navegación se oculte o no

  constructor() { }

  //función de conexión
  enviarDatos(dato:string){
    this.mensaje.next(dato);
  }
}
