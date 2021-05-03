import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { TipoBusqueda } from 'src/app/objetos/TipoBusqueda';
import { Paginas, PaginasEspacializadosEspañol, PaginasEspañol } from './objetos/Paginas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buscador';
  srcUrl= 'https://dle.rae.es/';
  srcTranslate: "https://www.google.com"
  fecha = Date.now().toLocaleString();
  favoriteSeason: string;
  paginasBusqueda: Paginas[] = [];
  textoABuscar : String = "";
  busqueda: TipoBusqueda[] = [
    {
      Id: 1,
      Descripcion: 'Diccionarios generales en español',
      Checked:false,
      Paginas: PaginasEspañol
    },
    {
      Id: 2,
      Descripcion: 'Diccionarios especializados en español',
      Checked:false,
      Paginas:PaginasEspacializadosEspañol
    },
    { Id: 3, Descripcion: 'Diccionarios generales en inglés', Checked:false,   Paginas:PaginasEspacializadosEspañol },
    { Id: 4, Descripcion: 'Diccionarios especializados en inglés', Checked:false ,   Paginas:PaginasEspacializadosEspañol},
    { Id: 5, Descripcion: 'Traducción del inglés al español', Checked:false ,   Paginas:PaginasEspacializadosEspañol},
    { Id: 6, Descripcion: 'Traducción especializada del inglés al español', Checked:false,   Paginas:PaginasEspacializadosEspañol },
    { Id: 7, Descripcion: 'Traducción del francés al español' , Checked:false,   Paginas:PaginasEspacializadosEspañol},
    { Id: 8, Descripcion: 'Diccionarios de catalán', Checked:false ,   Paginas:PaginasEspacializadosEspañol}

  ];

  resultado: string[] = []

  myFunction(data:any)
  {
    let paginas : Paginas[] = this.busqueda.find(m=>m.Checked === true).Paginas;
    this.paginasBusqueda = paginas.slice();
  
 }
 evento(data:Paginas)
 {
 this.srcUrl =  data.URL+this.textoABuscar;

 }
}
