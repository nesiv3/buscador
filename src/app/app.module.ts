import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './shared/modules/material/material.module';
import { SafePipe } from './safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MaterialModule
     
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
