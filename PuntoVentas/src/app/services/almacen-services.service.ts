import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlmacenServicesService {

  private url = "http://apiventas.com/api";

  constructor(private http: HttpClient) { }

  ListarAlmacen() {
    return this.http.get(`${ this.url }/stock`);
  }

  RegistrarAlmacen(datos: any){
    return this.http.post(`${ this.url }/almacen/nuevo`, datos);
  }
}
