import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from '../../shared/model/Parque';
import { ParqueService } from '../../shared/service/parque.service';


@Component({
  selector: 'app-editar-parque',
  templateUrl: './editar-parque.component.html',
  styleUrls: ['./editar-parque.component.css']
})
export class EditarParqueComponent implements OnInit {

  parque:Parque;

  constructor(private router:Router,private service:ParqueService) {

    this.parque=this.service.parque;
  }

  ngOnInit() {
    //this.editarParque();
  }

  editarParque(){
    let id=localStorage.getItem("id");
    this.service.getParqueId(+id)
    .subscribe(data=>{
      this.parque=data;
    })

  }
  actualizarParque(parque:Parque){
    alert(parque.id);
    this.service.updateParque(parque)
    .subscribe(data=>{
      this.parque=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }


}
