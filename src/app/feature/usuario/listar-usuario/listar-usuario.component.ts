import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getUsuarios()
      .subscribe(data => {
        this.usuarios = data;
      });
  }

  Nuevo(){
    this.router.navigate(["crearUsuario"]);
  }
  Editar(usuario:Usuario){
    //localStorage.setItem("id",usuario.id.toString());
    this.service.usuario = usuario;
    this.router.navigate(["editarUsuario"]);
  }

  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios=this.usuarios.filter(p=>p!==usuario);
      alert("Usuario eliminado...");
    })
  }

}
