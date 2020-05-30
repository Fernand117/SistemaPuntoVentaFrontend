import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvedoresServicesService {

  private url = "http://apiventas.com/api";

  constructor(private http: HttpClient) { }

  ListarProvedores(){
    return this.http.get(`${ this.url }/provedores`);
  }

  RegistrarProvedor(datos: any) {
    return this.http.post(`${ this.url }/provedores/nuevo`, datos);
  }

  EliminarProvedor(id: number) {
    return this.http.delete(`${ this.url }/provedores/eliminar/${id}`);
  }
}
