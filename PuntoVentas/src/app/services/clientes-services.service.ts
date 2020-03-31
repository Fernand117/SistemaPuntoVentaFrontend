import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesServicesService {

  private url = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  TotalClientes() {
    return this.http.get(`${ this.url }/clientes/total`);
  }

  ListarClientes() {
    return this.http.get(`${ this.url }/clientes`);
  }

}
