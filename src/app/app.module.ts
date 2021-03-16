import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './feature/usuario/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './feature/usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './feature/usuario/editar-usuario/editar-usuario.component';

import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { ParqueModule } from '@parque/parque.module';
import { TiqueteModule } from './feature/tiquete/tiquete.module';


@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent

  ],
  imports: [
    ParqueModule,
    TiqueteModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
