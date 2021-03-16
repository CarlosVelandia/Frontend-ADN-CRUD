import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-tiquete.component';
import { EditarTiqueteComponent } from './components/editar-tiquete/editar-tiquete.component';
import { ListarTiqueteComponent } from './components/listar-tiquete/listar-tiquete.component';
import { TiqueteService } from './shared/service/tiquete.service';
import { TiqueteRoutingModule } from './tiquete-routing.module';

@NgModule({
  declarations: [
    CrearTiqueteComponent,
    ListarTiqueteComponent,
    EditarTiqueteComponent
  ],

  imports: [
    TiqueteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  providers: [TiqueteService]
})
export class TiqueteModule { }
