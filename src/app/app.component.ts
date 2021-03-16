import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADN';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listarUsuario"]);
  }
  ListarParques(){
    this.router.navigate(["parques"]);
  }
  ListarTiquetes(){
    this.router.navigate(["tiquetes"]);
  }
}
