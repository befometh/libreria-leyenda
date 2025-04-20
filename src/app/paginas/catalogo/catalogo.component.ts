import { Component, OnInit} from '@angular/core';
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
export class CatalogoComponent implements OnInit{
  buscar: string = "buscar.svg";
  filtrar: string = "filtrar.svg";
  ordenar: string = "ordenar.svg";
  catalogoDiv: any; //variable que almacenará el objeto HTML del catálogo que esté en foco en ese momento
  slider: any; // variable que almacenará el objeto HTML de la sección que esté en foco en ese momento
  productos: any[]=[]; //Variable que almacenará la lista de productos total

  /*
  * Elementos de la página Catálogo: Categorías
  *
  * Envían la información a los ng-container para que se cree la lista requerida
  * */

  masBuscado = ["001", "003","011"];
  drama = ["001", "003", "007", "008","010"];
  fantasia = ["001", "004", "005", "006", "007", "008","011"];
  rol=["004", "005", "011"]

  constructor(private conn: ProductosService) { //Servicio que trae la información de la DB
  }

  /**
   * Al momento de cargar la página traemos la información de la DB
   */
  ngOnInit() {
    this.conn.obtenerProductos().subscribe({ //Abrimos conexión con una pomesa
        next: (res: any) => {
          this.productos = res.productos //Si tiene éxito se entregan los datos a la página catálogo
        },
        error: (err) => console.log("No ha sido posible insertar el valor esperado, código de error: ", err) //Si falla se da un informe de error por consola
      }
    );
  }

  /**
   * Función que da utilidad al slider dependiendo de su categoría
   * @param valor = true derecha, false izquierda
   * @param categoria número que representa la categoría a la que pertenece
   * @param lugares Se envía la cantidad de elementos que componen esa lista en concreto.
   */
  funcionBotones(valor: boolean, categoria: number, lugares: number) {
    this.catalogoDiv = document.querySelector(`#categoriaDiv${categoria}`); //Se traen los objetos HTML catalogo
    this.slider = document.querySelector(`#slider${categoria}`); //y slider dependiendo la categoría a la que haga parte el botón

    //Se almacena la posición actual del slider a la izquierda
    let posIzquierda = parseInt(getComputedStyle(this.catalogoDiv).getPropertyValue("left"));

    //Se almacena la posición del slider a la derecha
    let posDerecha = parseInt(getComputedStyle(this.catalogoDiv).getPropertyValue("right"));

    //Se calcula el tamaño del contenedor dependiendo la pantalla que lo muestra.
    let tamContenedor = parseInt(getComputedStyle(this.slider).getPropertyValue("width"));
    let base = tamContenedor / lugares; //tamaño del contenedor dividido la cantidad de lugares mostrados
    if (valor) {
      if (posDerecha < 0) { //Límite a la derecha
        posIzquierda = posIzquierda - base; //Se mueve a la izquierda
        this.catalogoDiv.setAttribute("style", `left: ${posIzquierda}px;`);
      }
    } else {
      if (posIzquierda < 0) { //limite a la izquierda
        posIzquierda = posIzquierda + base; //Se mueve a la derecha
        this.catalogoDiv.setAttribute("style", `left: ${posIzquierda}px;`);
      }
    }
  }

  /**
   * Según los arreglos de categoría, (ver más arriba en Categorías), se llama el producto de interés para tratar en el template
   * @param id = id del producto de interés
   */
  obtenerProducto(id: string) {
    let producto: any;
    for (let elem of this.productos) { //Se recorre la lista de productos
      if (elem.id === id) { //Si es igual al ID solicitado
        producto = elem; //Se guarda el elemento
        break; //Se sale del for
      }
    }
    return producto; //Se entrega el producto de interés
  }

  /**
   * Revisa si hay ofertas en la lista de productos totales y lista los que tienen
   */
  buscarOfertas(){
    let productosOfertados: any[]=[];
    for(let elem of this.productos){
      if(elem.oferta){
        productosOfertados.push(elem);
      }
    }
    return productosOfertados; //Nuevo arreglo con los productos ya ofertados
  }

  /**
   * lista todos los productos, función necesaria debido a que la carga de datos es asíncrona
   */
  listarProductos(){
    let todos = [];
    for(let elem of this.productos)
      todos.push(elem);
    return todos;
  }
}
