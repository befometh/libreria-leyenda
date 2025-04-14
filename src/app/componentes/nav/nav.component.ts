import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    NgIf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnChanges{
  @Input() estaActivo!: boolean;
  /*esInicio: Variable que activa y desactiva la barra de inicio en la parte superior, (considerando que la página
  * principal las tiene integradas en su contenido, para dar resaltado)*/

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.estaActivo);
  }
}
