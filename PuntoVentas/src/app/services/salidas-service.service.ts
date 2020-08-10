import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalidasServiceService {

  //private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  private url = "http://ventasapi.win:90/api";
  /*DIRECCIÓN URL DE HEROKU*/
  //private url = "https://ventasapi.herokuapp.com/api";
  //private url = "https://sistemapuntoventaapi.000webhostapp.com/api";

  constructor(private http: HttpClient) { }

  ListarSalidas() {
    return this.http.get(`${ this.url }/salidas`);
  }

  RegistrarSalida(datos: any) {
    return this.http.post(`${ this.url }/salida/nueva`, datos);
  }

  ActualizarSalida(datos: any, id: number) {
    return this.http.post(`${ this.url }/editar/${id}`, datos);
  }
}
