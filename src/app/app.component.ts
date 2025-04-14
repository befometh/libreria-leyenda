import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './componentes/nav/nav.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La Leyenda del Libro'; //Contenedor del título de la página
  /*pagPrincipal: Variable que almacena si se encuentra en la página de inicio o no, importante para la visibilidad
  * del header/nav, (la página de inicio integra ambos dentro de su propio esquema para dar resalte)*/
  pagPrincipal: boolean = true;
}
