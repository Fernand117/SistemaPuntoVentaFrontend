import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalidasServiceService {

  private url = "http://127.0.0.1:8000/api";

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
