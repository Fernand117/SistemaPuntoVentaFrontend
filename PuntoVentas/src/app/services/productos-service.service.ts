import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosModule } from '../models/productos/productos.module';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  private url = "http://127.0.0.1:8000/api";

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
}
