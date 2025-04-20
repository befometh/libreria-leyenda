import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductosService} from '../../servicios/productos/productos.service';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit, AfterViewInit {
  buscar: string = "buscar.svg";
  filtrar: string = "filtrar.svg";
  ordenar: string = "ordenar.svg";
  catalogoDiv: any;
  slider: any;
  productos: any[]=[];

  /*
  * Elementos de la página Catálogo
  * */

  masBuscado = ["001", "003","011"];
  drama = ["001", "003", "007", "008","010"];
  fantasia = ["001", "004", "005", "006", "007", "008","011"];
  rol=["004", "005", "011"]

  constructor(private conn: ProductosService) {
  }

  ngOnInit() {
    this.conn.obtenerProductos().subscribe({
        next: (res: any) => {
          this.productos = res.productos
        },
        error: (err) => console.log("No ha sido posible insertar el valor esperado, código de error: ", err)
      }
    );    this.conn.obtenerProductos().subscribe({
        next: (res: any) => {
          this.productos = res.productos
        },
        error: (err) => console.log("No ha sido posible insertar el valor esperado, código de error: ", err)
      }
    );
  }

  ngAfterViewInit(): void {
  }

  funcionBotones(valor: boolean, categoria: number, lugares: number) {
    this.catalogoDiv = document.querySelector(`#categoriaDiv${categoria}`);
    this.slider = document.querySelector(`#slider${categoria}`);

    let posIzquierda = parseInt(getComputedStyle(this.catalogoDiv).getPropertyValue("left"));
    let posDerecha = parseInt(getComputedStyle(this.catalogoDiv).getPropertyValue("right"));
    let tamContenedor = parseInt(getComputedStyle(this.slider).getPropertyValue("width"));
    let base = tamContenedor / lugares;
    if (valor) {
      if (posDerecha < 0) {
        posIzquierda = posIzquierda - base;
        this.catalogoDiv.setAttribute("style", `left: ${posIzquierda}px;`);
      }
    } else {
      if (posIzquierda < 0) {
        posIzquierda = posIzquierda + base;
        this.catalogoDiv.setAttribute("style", `left: ${posIzquierda}px;`);
      }
    }
  }

  obtenerProducto(id: string) {
    let producto: any;
    for (let elem of this.productos) {
      if (elem.id === id) {
        producto = elem;
        break;
      }
    }
    return producto;
  }


}
