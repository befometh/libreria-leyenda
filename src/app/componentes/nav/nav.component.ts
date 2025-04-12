import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav',
    imports: [
        NgIf
    ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnChanges{
  @Input() estaActivo!: boolean;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.estaActivo);
  }
}
