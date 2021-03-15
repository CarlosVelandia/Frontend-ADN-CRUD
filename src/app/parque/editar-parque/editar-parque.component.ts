import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Parque } from '../../Modelo/Parque';

@Component({
  selector: 'app-editar-parque',
  templateUrl: './editar-parque.component.html',
  styleUrls: ['./editar-parque.component.css']
})
export class EditarParqueComponent implements OnInit {

  parque:Parque=new Parque();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.editarParque();
  }

  editarParque(){
    let id=localStorage.getItem("id");
    this.service.getParqueId(+id)
    .subscribe(data=>{
      this.parque=data;
    })

  }
  actualizarParque(parque:Parque){
    this.service.updateParque(parque)
    .subscribe(data=>{
      this.parque=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }


}
