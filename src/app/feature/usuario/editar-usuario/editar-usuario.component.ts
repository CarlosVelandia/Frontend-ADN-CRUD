import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-edit',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario :Usuario=new Usuario();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getUsuarioId(+id)
    .subscribe(data=>{
      this.usuario=data;
    })

  }
  Actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarUsuario"]);
    })
  }

}
