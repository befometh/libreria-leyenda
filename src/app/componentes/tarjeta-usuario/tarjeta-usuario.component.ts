import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-tarjeta-usuario',
  imports: [
    NgIf
  ],
  templateUrl: './tarjeta-usuario.component.html',
  styleUrl: './tarjeta-usuario.component.css'
})
export class TarjetaUsuarioComponent {
  usuario = {
    nombre:"",
    email: "",
    rutaIMG: ""
  };
  isLogged=true;

  constructor() {
    this.usuario = {
      nombre: "Nombre Apellido",
      email: "usuario@correo.com",
      rutaIMG: "foto.jpg"
    }
  }
}
