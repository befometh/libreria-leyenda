import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  buscar: string="buscar.svg";
  filtrar: string = "filtrar.svg";
  ordenar: string = "ordenar.svg";

}
