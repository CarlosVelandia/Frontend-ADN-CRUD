import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Parque } from '../../Modelo/Parque';

@Component({
  selector: 'app-crear-parque',
  templateUrl: './crear-parque.component.html',
  styleUrls: ['./crear-parque.component.css']
})

export class CrearParqueComponent implements OnInit {

  parque:Parque=new Parque();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  guardarParque(){
    this.service.createParque(this.parque)
    .subscribe(data=>{
      alert("Se Creo con Exito...!!!");
      this.router.navigate(["listarParques"]);
    })
  }

}
