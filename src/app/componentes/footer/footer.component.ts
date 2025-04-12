import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Rutas tomadas de la carpeta /public
    rutaInstagram: string = "brand-instagram.svg";
    rutaSnapchat: string = "brand-snapchat.svg";
    rutaTwitter: string = "brand-x.svg";
    rutaYoutube: string = "brand-youtube.svg";

}
