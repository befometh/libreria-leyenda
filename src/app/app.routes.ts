import { Routes } from '@angular/router';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {ErrorComponent} from './paginas/error/error.component';
import {CatalogoComponent} from './paginas/catalogo/catalogo.component';
import {FichaComponent} from './paginas/ficha/ficha.component';
import {renderizadorResolver} from './servicios/renderizador.resolver';

export const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"catalogo", component:CatalogoComponent},
  {path:"ficha/:id", component:FichaComponent, resolve: {producto:renderizadorResolver}},
  {path:"**", component:ErrorComponent}
];
