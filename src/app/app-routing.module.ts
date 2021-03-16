import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './feature/Persona/listar/listar.component';
import { AddComponent } from './feature/Persona/add/add.component';
import { EditComponent } from './feature/Persona/edit/edit.component';



const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path: 'parques', loadChildren: () => import('@parque/parque.module').then(mod => mod.ParqueModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
