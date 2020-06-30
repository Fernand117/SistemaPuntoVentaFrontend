import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServiceService {

  private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  //private url = "http://ventasapi.win:90/api";

  constructor(private http: HttpClient) { }

  ListarCategorias() {
    return this.http.get(`${ this.url }/categorias`);
  }

  RegistrarCategoria(datos: any) {
    return this.http.post(`${ this.url }/categorias/nueva`, datos);
  }

  EliminarCategoria(id: number) {
    return this.http.delete(`${ this.url }/categorias/eliminar/${id}`);
  }
}
