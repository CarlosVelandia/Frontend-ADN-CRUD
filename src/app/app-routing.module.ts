import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarParqueComponent } from './parque/listar-parque/listar-parque.component';
import { CrearParqueComponent } from './parque/crear-parque/crear-parque.component';
import { EditarParqueComponent } from './parque/editar-parque/editar-parque.component';
import { ListarTiqueteComponent } from './tiquete/listar-tiquete/listar-tiquete.component';
import { CrearTiqueteComponent } from './tiquete/crear-tiquete/crear-tiquete.component';
import { EditarTiqueteComponent } from './tiquete/editar-tiquete/editar-tiquete.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'listarParques', component:ListarParqueComponent},
  {path:'crearParques',component:CrearParqueComponent},
  {path:'editarParques',component:EditarParqueComponent},
  {path:'listarTiquetes', component:ListarTiqueteComponent},
  {path:'crearTiquetes',component:CrearTiqueteComponent},
  {path:'editarTiquetes',component:EditarTiqueteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
