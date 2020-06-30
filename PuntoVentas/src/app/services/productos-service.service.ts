import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosModule } from '../models/productos/productos.module';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  //private url = "http://ventasapi.win:90/api";

  constructor(private http: HttpClient) { }

  TotalProductosRegistrados() {
    return this.http.get(`${ this.url }/productos/total`);
  }

  ListarProductos() {
    return this.http.get(`${ this.url }/productos`);
  }

  RegistrarProducto(datos: any) {
    return this.http.post(`${ this.url }/productos/nuevo`, datos);
  }

  ListarProductosDetalles(datos: any) {
    return this.http.post(`${ this.url }/productos/add`, datos);
  }

  FiltrarProducto(id: string) {
    return this.http.get(`${ this.url }/productos/filtro/${id}`);
  }

  EditarProducto(id: number, datos: any) {
    return this.http.post(`${ this.url }/producto/editar/${id}`, datos);
  }

  EliminarProducto(id: string) {
    return this.http.delete(`${ this.url }/productos/eliminar/${id}`);
  }
}
