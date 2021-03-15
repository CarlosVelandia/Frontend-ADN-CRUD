import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Tiquete } from '../../Modelo/tiquete';

@Component({
  selector: 'app-crear-tiquete',
  templateUrl: './crear-tiquete.component.html',
  styleUrls: ['./crear-tiquete.component.css']
})
export class CrearTiqueteComponent implements OnInit {

  tiquete:Tiquete=new Tiquete();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  guardarTiquete(){
    this.service.createTiquete(this.tiquete)
    .subscribe(data=>{
      alert("Se Creo con Exito...!!!");
      this.router.navigate(["listarTiquetes"]);
    })
  }

}
