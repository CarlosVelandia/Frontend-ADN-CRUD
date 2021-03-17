import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'parques', loadChildren: () => import('@parque/parque.module').then(mod => mod.ParqueModule) },
  {path: 'tiquetes', loadChildren: () => import('@tiquete/tiquete.module').then(mod => mod.TiqueteModule) },
  {path: 'usuarios', loadChildren: () => import('@usuario/usuario.module').then(mod => mod.UsuarioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
