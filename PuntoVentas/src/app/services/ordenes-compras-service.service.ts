import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenesComprasServiceService {

  private url = "http://apiventas.com/api";

  constructor(private http: HttpClient) { }

  TotalOrdenesCompras() {
    return this.http.get(`${ this.url }/ordenescompras/total`);
  }

  RegistrarCompra(datos: any) {
    return this.http.post(`${ this.url }/ordenescompras/nueva`, datos);
  }

  ListarCompras() {
    return this.http.get(`${ this.url }/ordenescompras`);
  }

  ListarDetallesComprasProductos(datos: any) {
    return this.http.post(`${ this.url }/almacen/detalles/compras`, datos);
  }

  Eliminar(id: number) {
    return this.http.delete(`${ this.url }/ordenescompras/eliminar/${id}`);
  }
}
