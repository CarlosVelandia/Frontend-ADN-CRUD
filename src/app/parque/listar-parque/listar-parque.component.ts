import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Parque } from '../../Modelo/Parque';


@Component({
  selector: 'app-listar-parque',
  templateUrl: './listar-parque.component.html',
  styleUrls: ['./listar-parque.component.css']
})
export class ListarParqueComponent implements OnInit {

  parques:Parque[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getParques()
      .subscribe(data => {
        this.parques = data;
      });
  }

  nuevoParque(){
    this.router.navigate(["crearParques"]);
  }
  editarParque(parque:Parque){
    //localStorage.setItem("id",parque.id.toString());
    this.service.parque = parque;
    this.router.navigate(["editarParques"]);
  }

  deleteParque(parque:Parque){
    this.service.deleteParque(parque)
    .subscribe(data=>{
      this.parques=this.parques.filter(p=>p!==parque);
      alert("Parque eliminado...");
    })
  }



}
