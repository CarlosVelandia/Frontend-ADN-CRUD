import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './feature/usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './feature/usuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './feature/usuario/listar-usuario/listar-usuario.component';




const routes: Routes = [
  {path:'listarUsuario', component:ListarUsuarioComponent},
  {path:'crearUsuario',component:CrearUsuarioComponent},
  {path:'editarUsuario',component:EditarUsuarioComponent},
  {path: 'parques', loadChildren: () => import('@parque/parque.module').then(mod => mod.ParqueModule) },
  {path: 'tiquetes', loadChildren: () => import('@tiquete/tiquete.module').then(mod => mod.TiqueteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
