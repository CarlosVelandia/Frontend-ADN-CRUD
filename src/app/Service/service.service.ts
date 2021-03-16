import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Parque } from '../feature/parque/shared/model/Parque';
import { Tiquete } from '../Modelo/tiquete';

@Injectable()
export class ServiceService {

  persona: Persona;
  parque: Parque;
  tiquete: Tiquete;

  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/tiquetes-parque-diversiones';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url+"/usuarios");
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/usuarios",persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/usuarios/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/usuarios/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/usuarios/"+persona.id);
  }


  ///Parque

  getParques(){
    return this.http.get<Parque[]>(this.Url+"/parques");
  }
  createParque(parque:Parque){
    return this.http.post<Parque>(this.Url+"/parques",parque);
  }
  getParqueId(id:number){
    return this.http.get<Parque>(this.Url+"/parques/"+id);
  }
  updateParque(parque:Parque){
    return this.http.put<Parque>(this.Url+"/parques/"+parque.id,parque);
  }
  deleteParque(parque:Parque){
    return this.http.delete<Parque>(this.Url+"/parques/"+parque.id);
  }

  ///Tiquete

  getTiquetes(){
    return this.http.get<Tiquete[]>(this.Url+"/tiquetes");
  }
  createTiquete(tiquete:Tiquete){
    return this.http.post<Tiquete>(this.Url+"/tiquetes",tiquete);
  }
  getTiqueteId(id:number){
    return this.http.get<Tiquete>(this.Url+"/tiquetes/"+id);
  }
  updateTiquete(tiquete:Tiquete){
    return this.http.put<Tiquete>(this.Url+"/tiquetes/"+tiquete.id,tiquete);
  }
  deleteTiquete(tiquete:Tiquete){
    return this.http.delete<Tiquete>(this.Url+"/tiquetes/"+tiquete.id);
  }
}
