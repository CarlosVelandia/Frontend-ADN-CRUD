import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Parque } from '../Modelo/Parque';
import { Tiquete } from '../Modelo/tiquete';

@Injectable()
export class ServiceService {

  persona: Persona;
  parque: Parque;
  tiquete: Tiquete;

  constructor(private http:HttpClient) { }

  UrlUsuarios='http://localhost:8084/tiquetes-parque-diversiones/usuarios';
  UrlParques='http://localhost:8084/tiquetes-parque-diversiones/parques';
  UrlTiquetes='http://localhost:8084/tiquetes-parque-diversiones/tiquetes';

  getPersonas(){
    return this.http.get<Persona[]>(this.UrlUsuarios);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.UrlUsuarios,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.UrlUsuarios+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.UrlUsuarios+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.UrlUsuarios+"/"+persona.id);
  }

  ///Parque

  getParques(){
    return this.http.get<Parque[]>(this.UrlParques);
  }
  createParque(parque:Parque){
    return this.http.post<Parque>(this.UrlParques,parque);
  }
  getParqueId(id:number){
    return this.http.get<Parque>(this.UrlParques+"/"+id);
  }
  updateParque(parque:Parque){
    return this.http.put<Parque>(this.UrlParques+"/"+parque.id,parque);
  }
  deleteParque(parque:Parque){
    return this.http.delete<Parque>(this.UrlParques+"/"+parque.id);
  }

  ///Tiquete

  getTiquetes(){
    return this.http.get<Tiquete[]>(this.UrlTiquetes);
  }
  createTiquete(tiquete:Tiquete){
    return this.http.post<Tiquete>(this.UrlTiquetes,tiquete);
  }
  getTiqueteId(id:number){
    return this.http.get<Tiquete>(this.UrlTiquetes+"/"+id);
  }
  updateTiquete(tiquete:Tiquete){
    return this.http.put<Tiquete>(this.UrlTiquetes+"/"+tiquete.id,tiquete);
  }
  deleteTiquete(tiquete:Tiquete){
    return this.http.delete<Tiquete>(this.UrlTiquetes+"/"+tiquete.id);
  }
}
