import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlmacenServicesService {

  private url = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  ListarAlmacen(){
    return this.http.get(`${ this.url }/almacen`);
  }

  RegistrarAlmacen(datos: any){
    return this.http.post(`${ this.url }/almacen/nuevo`, datos);
  }
}
