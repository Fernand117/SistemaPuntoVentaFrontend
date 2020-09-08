import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriasServiceService {

  //private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  //private url = "http://ventasapi.win:90/api";
  /*DIRECCIÓN URL DE HEROKU*/
  //private url = "https://ventasapi.herokuapp.com/api";
  //private url = "https://sistemapuntoventaapi.000webhostapp.com/api";
  //private url = "http://192.168.1.69/ApiVentas/api";
  private url = "http://localhost/ApiVentas/api";

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
