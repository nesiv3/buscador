import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { TipoBusqueda } from 'src/app/objetos/TipoBusqueda';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buscador';

  fecha = Date.now().toLocaleString();
  favoriteSeason: string;
  busqueda: TipoBusqueda[] = [
    {
      Id: 1,
      Descripcion: 'Diccionarios generales en español',
      Checked:false
    },
    {
      Id: 2,
      Descripcion: 'Diccionarios especializados en español',
      Checked:false
    },
    { Id: 3, Descripcion: 'Diccionarios generales en inglés', Checked:false },
    { Id: 4, Descripcion: 'Diccionarios especializados en inglés', Checked:false },
    { Id: 5, Descripcion: 'Traducción del inglés al español', Checked:false },
    { Id: 6, Descripcion: 'Traducción especializada del inglés al español', Checked:false },
    { Id: 7, Descripcion: 'Traducción del francés al español' , Checked:false},
    { Id: 8, Descripcion: 'Diccionarios de catalán', Checked:false }

  ];

  resultado: string[] = []
}
