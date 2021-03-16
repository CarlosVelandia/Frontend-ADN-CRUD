import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from '../../shared/model/Parque';
import { ParqueService } from '../../shared/service/parque.service';

@Component({
  selector: 'app-listar-parque',
  templateUrl: './listar-parque.component.html',
  styleUrls: ['./listar-parque.component.css']
})
export class ListarParqueComponent implements OnInit {

  parques:Parque[];
  constructor(private service: ParqueService, private router: Router) { }

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
    alert(parque.id);
    this.service.parque = parque;
    alert(parque.id);
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
