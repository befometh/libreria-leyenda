import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './componentes/nav/nav.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La Leyenda del Libro';
  pagPrincipal: boolean = true;
}
