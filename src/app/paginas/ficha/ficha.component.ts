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

  producto: any;
  corazon= "corazon.svg"

  constructor(
    private ruta: ActivatedRoute,
    private conn: ProductosService
  ) {  }

  ngOnInit() {
    const productoID =   this.ruta.snapshot.paramMap.get("id");
    this.conn.obtenerProducto(productoID).subscribe({
      next: (res) => this.producto = res,
      error: (err) => console.log("Error al cargar el producto, código de error: ", err)
    })
  }
}
