import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Tiquete } from '../../Modelo/tiquete';


@Component({
  selector: 'app-listar-tiquete',
  templateUrl: './listar-tiquete.component.html',
  styleUrls: ['./listar-tiquete.component.css']
})
export class ListarTiqueteComponent implements OnInit {

  tiquetes:Tiquete[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getTiquetes()
    .subscribe(data => {
      this.tiquetes = data;
    });
  }

  nuevoTiquete(){
    this.router.navigate(["crearTiquetes"]);
  }

  editarTiquete(tiquete:Tiquete){
    //localStorage.setItem("id",tiquete.id.toString());
    this.service.tiquete = tiquete;
    this.router.navigate(["editarTiquetes"]);
  }

  deleteTiquete(tiquete:Tiquete){
    this.service.deleteTiquete(tiquete)
    .subscribe(data=>{
      this.tiquetes=this.tiquetes.filter(p=>p!==tiquete);
      alert("Tiquete eliminado...");
    })
  }

}
