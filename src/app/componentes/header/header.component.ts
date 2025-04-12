import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TarjetaUsuarioComponent} from '../tarjeta-usuario/tarjeta-usuario.component';


@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    RouterLink,
    TarjetaUsuarioComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges{
  @Input() estaActivo!: boolean;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.estaActivo);
  }
}
