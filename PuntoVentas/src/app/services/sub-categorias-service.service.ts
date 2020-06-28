import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriasServiceService {

  //private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  private url = "http://ventasapi.win:90/api";

  constructor(private http: HttpClient) { }

  ListarSubcategorias() {
    return this.http.get(`${ this.url }/subcategorias`);
  }

  RegistrarSubcategoria(datos: any) {
    return this.http.post(`${ this.url }/subcategorias/nueva`, datos);
  }

  Eliminar(id: number) {
    return this.http.delete(`${ this.url }/subcategorias/eliminar/${id}`);
  }
}
