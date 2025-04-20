//Sistema de renderizado, creado principalmente para evitar que la página Ficha se cargue sin datos, le avisa
//al sistema en que momento está disponible cargar la página

import { ResolveFn } from '@angular/router';
import {ProductosService} from './productos/productos.service';
import {inject} from '@angular/core';
import {Observable} from 'rxjs';

/**
 * Función de renderizado principal, recibe la ruta y la procesa para que se cargue la página luego de que se resuelva
 * la función de manera asíncrona
 * @param route Objeto activateRouteSnapshot requerido para el Resolver
 */
export const renderizadorResolver: ResolveFn<Observable<any>> = (route) => {
  const productos = inject(ProductosService); //Se inyecta el servicio que comunica con la lista de productos
  const productoID = route.paramMap.get("id"); //Se lee el ID del producto a buscar
  return productos.obtenerProducto(productoID); //Se llama la función encargada de filtrar el producto por ID
};
