import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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
export class InicioComponent implements OnInit, OnDestroy{
  @Input() productos:any;

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  angle = 0;
  spinner:any;
  galleryspin(sign:boolean) {
    this.spinner = document.querySelector("#spinner");
    if (!sign) { this.angle = (this.angle + 45); } else { this.angle = this.angle - 45; }
    let atributos =
      "-webkit-transform: rotateY("+ this.angle +"deg); " +
      "-moz-transform: rotateY("+ this.angle +"deg); " +
      "transform: rotateY("+ this.angle +"deg);";
    this.spinner.setAttribute("style",atributos);

  }

}
