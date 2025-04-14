import {Component,  OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './componentes/nav/nav.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {ToggleNavBarService} from './servicios/toggle-nav-bar.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'La Leyenda del Libro'; //Contenedor del título de la página
  pagPrincipal: boolean = true;
  /*pagPrincipal: Variable que almacena si se encuentra en la página de inicio o no, importante para la visibilidad
  * del header/nav, (la página de inicio integra ambos dentro de su propio esquema para dar resalte)*/

  constructor(private toggle:ToggleNavBarService) {
  }

  tipoPagina(e:any){
    this.pagPrincipal = e === '1';
  }

  ngOnInit(): void {
    this.leerMensaje()
    console.log("esto ocurre");
  }

  leerMensaje() {
    this.toggle.mensaje$.subscribe(valor => {
      this.pagPrincipal = valor === '1';
    })
  }
}
