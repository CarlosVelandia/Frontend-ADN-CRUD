import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule}from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { ParqueModule } from '@parque/parque.module';
import { TiqueteModule } from './feature/tiquete/tiquete.module';
import { UsuarioModule } from './feature/usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    UsuarioModule,
    ParqueModule,
    TiqueteModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
