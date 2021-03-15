import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { CrearParqueComponent } from './parque/crear-parque/crear-parque.component';
import { ListarParqueComponent } from './parque/listar-parque/listar-parque.component';
import { EditarParqueComponent } from './parque/editar-parque/editar-parque.component';

import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { CrearTiqueteComponent } from './tiquete/crear-tiquete/crear-tiquete.component';
import { ListarTiqueteComponent } from './tiquete/listar-tiquete/listar-tiquete.component';
import { EditarTiqueteComponent } from './tiquete/editar-tiquete/editar-tiquete.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    CrearParqueComponent,
    ListarParqueComponent,
    EditarParqueComponent,
    CrearTiqueteComponent,
    ListarTiqueteComponent,
    EditarTiqueteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
