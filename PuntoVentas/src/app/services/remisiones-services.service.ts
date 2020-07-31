import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemisionesServicesService {

  //private url = "http://apiventas.com/api";
  //private url = "http://127.0.0.1:8000/api";
  private url = "http://ventasapi.win:90/api";
  /*DIRECCIÓN URL DE HEROKU*/
  //private url = "https://ventasapi.herokuapp.com/api";
  //private url = "https://sistemapuntoventaapi.000webhostapp.com/api";

  constructor(private http: HttpClient) { }

  ListarRemisiones() {
    return this.http.get(`${ this.url }/remisiones`);
  }

  RegistrarRemisiones(datos: any) {
    return this.http.post(`${ this.url }/remisiones/nueva`, datos);
  }

  EditarRemison(datos: any) {
    return this.http.post(`${ this.url }/remisiones/editar`, datos);
  }

  EliminarRemision(id: number) {
    return this.http.delete(`${ this.url }/remisiones/eliminar/${id}`);
  }

  ActualizarRemision(datos: any) {
    return this.http.post(`${ this.url }/remisiones/actualizar`, datos);
  }
}
