//Componente principal de la página: Ficha

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../servicios/productos/productos.service';

@Component({
  selector: 'app-ficha',
  imports: [],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent implements OnInit {

  producto: any; //parámetro que almacenará el producto que pida el catálogo
  corazon= "corazon.svg"

  /**
   * Se crean los objetos que contendrán la ruta y la conexión con la base de datos respectivamente.
   * @param ruta objeto que trata la ruta
   * @param conn objeto de tipo ProductosService que comunica con el servidor
   */
  constructor(
    private ruta: ActivatedRoute,
    private conn: ProductosService
  ) {  }

  /**
   * Utilizamos la función de carga del sistema para traer los datos
   */
  ngOnInit() {
    const productoID =   this.ruta.snapshot.paramMap.get("id"); //traemos los datos de la URL
    this.conn.obtenerProducto(productoID).subscribe({ //Abrimos la conexión con una promesa
      next: (res) => this.producto = res, //Le damos los datos a  la variable productos
      error: (err) => console.log("Error al cargar el producto, código de error: ", err) //Try/catch del error, si lo hay
    })
  }
}
