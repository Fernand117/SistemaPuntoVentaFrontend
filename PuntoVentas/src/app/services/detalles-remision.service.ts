import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetallesRemisionService {

  //private url = "http://127.0.0.1:8000/api";
  private url = "http://apiventas.com/api";


  constructor(private http: HttpClient) { }

  ListarDetalleRemision(datos: any) {
    return this.http.post(`${ this.url }/detallesremision`, datos);
  }

  RegistrarDetalleRemision(datos: any) {
    return this.http.post(`${ this.url }/detallesremision/nuevo`, datos);
  }

  EliminarProductoRemision(id: any) {
    return this.http.delete(`${ this.url }/detallesremision/eliminar/${id}`);
  }
}
