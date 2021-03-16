import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Tiquete } from '../feature/tiquete/shared/model/Tiquete';

@Injectable()
export class ServiceService {

  usuario: Usuario;

  tiquete: Tiquete;

  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/tiquetes-parque-diversiones';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url+"/usuarios");
  }
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url+"/usuarios",usuario);
  }
  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.Url+"/usuarios/"+id);
  }
  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.Url+"/usuarios/"+usuario.id,usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.Url+"/usuarios/"+usuario.id);
  }

}
