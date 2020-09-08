import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesServicesService {

  //private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  //private url = "http://ventasapi.win:90/api";
  /*DIRECCIÓN URL DE HEROKU*/
  //private url = "https://ventasapi.herokuapp.com/api";
  //private url = "https://sistemapuntoventaapi.000webhostapp.com/api";
  //private url = "http://192.168.1.69/ApiVentas/api";
  private url = "http://localhost/ApiVentas/api";

  constructor(private http: HttpClient) { }

  TotalClientes() {
    return this.http.get(`${ this.url }/clientes/total`);
  }

  ListarClientes() {
    return this.http.get(`${ this.url }/clientes`);
  }

  ListarClienteDetalle(datos: any) {
    return this.http.post(`${ this.url }/cliente/detalle`, datos);
  }

  EditarCliente(datos: any, id: number){
    return this.http.post(`${ this.url }/clientes/actualizar/${id}`, datos);
  }

  RegisrarClientes(datos: any) {
    return this.http.post(`${ this.url }/clientes/nuevo`, datos);
  }

  EliminarCliente(id: number) {
    return this.http.delete(`${ this.url }/clientes/eliminar/${id}`);
  }

}
