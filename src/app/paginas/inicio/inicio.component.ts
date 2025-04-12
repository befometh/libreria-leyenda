import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TarjetaUsuarioComponent} from '../../componentes/tarjeta-usuario/tarjeta-usuario.component';

@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink,
    TarjetaUsuarioComponent,
    RouterLinkActive
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
