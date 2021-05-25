import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


import { TipoBusqueda } from 'src/app/objetos/TipoBusqueda';
import { Paginas, PaginasFrancesEspañol, PaginasEspañolFrances, PaginasEspañol, PaginasFrances } from './objetos/Paginas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buscador';
  srcUrl = 'https://dle.rae.es/';
  srcTranslate: "https://www.google.com"
  fecha = Date.now().toLocaleString();
  favoriteSeason: string;
  paginasBusqueda: Paginas[] = [];
  seleccion: TipoBusqueda = new TipoBusqueda();
  textoABuscar: String = "";
  busqueda: TipoBusqueda[] = [
    {
      Id: 1,
      Descripcion: 'ES-FR',
      Checked: true,
      Paginas: PaginasEspañolFrances
    },
    {
      Id: 2,
      Descripcion: 'FR-ES',
      Checked: false,
      Paginas: PaginasFrancesEspañol
    },
    {
      Id: 3,
      Descripcion: 'ES',
      Checked: false,
      Paginas: PaginasEspañol
    },
    { Id: 4, Descripcion: 'FR', Checked: false, Paginas: PaginasFrances },

  ];

  resultado: string[] = []


  rating = 0;
  myFunction() {
    let paginas: Paginas[] = this.seleccion.Paginas;
    this.paginasBusqueda = paginas.slice();


  }
  evento(data: Paginas) {

    if (data.Reemplazo) {
      this.srcUrl = data.URL.replace('=brucomodin', '=' + this.textoABuscar.toString());
    }
    else {
      this.srcUrl = data.URL + this.textoABuscar;
    }
    //
  }
  systemChange(data: TipoBusqueda) {
    this.seleccion = data;
  }

}
