import { Routes } from '@angular/router';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {ErrorComponent} from './paginas/error/error.component';
import {CatalogoComponent} from './paginas/catalogo/catalogo.component';

export const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"catalogo", component:CatalogoComponent},

  {path:"**", component:ErrorComponent}
];
