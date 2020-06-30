import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcasServiceService {

  private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  //private url = "http://ventasapi.win:90/api";


  constructor(private http: HttpClient) { }

  ListarMarcas() {
    return this.http.get(`${ this.url }/marcas`);
  }

  RegistrarMarca(datos: any) {
    return this.http.post(`${ this.url }/marcas/nueva`, datos);
  }

  EliminarMarca(id: number) {
    return this.http.delete(`${ this.url }/marcas/eliminar/${id}`);
  }
}
