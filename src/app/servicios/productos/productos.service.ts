import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private conn: HttpClient) {
  }

  obtenerProducto(productoID: string | null) {
    return this.conn.get("/productos.json").pipe(
      map((res: any) => {
        const productoEncontrado = res.productos.find((elem: any) => elem.id == productoID);
        return productoEncontrado || undefined;
      })
    )
  }


  obtenerProductos() {
    return this.conn.get("/productos.json");
  }
}
