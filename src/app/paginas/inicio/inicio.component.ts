import {Component,  Input, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TarjetaUsuarioComponent} from '../../componentes/tarjeta-usuario/tarjeta-usuario.component';
import {ToggleNavBarService} from '../../servicios/toggle-nav-bar.service';

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
  @Input() productos:any; //Variable que consume de la carpeta public/productos.json

  /**Importamos el servicio que permite que se oculte automáticamente la barra de navegación, (debido a que la
   * página inicial cuenta con header y barra de navegacion propias.
    * @param toggle = Nombre que toma el objeto.
   */
  constructor(private toggle: ToggleNavBarService){}

  /**
   * Usamos la etapa de destrucción del componente para indicar al sistema que muestre la barra de navegación (valor = 0)
   */
  ngOnDestroy(): void {
    this.esPrincipal("0");
  }

  /**
   * igual que el anterior pero al iniciarse el complemento la muestra, (valor = 1)
   */
  ngOnInit(): void {
    this.esPrincipal("1");
  }

  angle = 0; //Variable que almacena la posición del ángulo del carrusel, inicializada en 0º
  spinner:any; //objeto que almacennará el elemento HTML que representa el carrusel

  /**
   * Entrega movimiento al carrusel, se asigna a los botones a los costados del carrusel
   * @param sign + derecha - izquierda
   */
  galleryspin(sign:boolean) {
    this.spinner = document.querySelector("#spinner");
    if (!sign) { this.angle = (this.angle + 45); } else { this.angle = this.angle - 45; }
    let atributos =
      "-webkit-transform: rotateY("+ this.angle +"deg); " +
      "-moz-transform: rotateY("+ this.angle +"deg); " +
      "transform: rotateY("+ this.angle +"deg);";
    this.spinner.setAttribute("style",atributos);
  }

  /**
   * Función que comunica el sistema si está o no la página inicio en pantalla
   * @param valor mensaje enviado.
   */
  esPrincipal(valor:string){
    this.toggle.enviarDatos(valor);
  }

}
