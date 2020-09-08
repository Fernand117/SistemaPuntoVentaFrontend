import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModule } from '../models/auth/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private url = "http://apiventas.com/api";
  //private url = "http://ventasapi.win:90/api";
  //private url = "http://127.0.0.1:8000/api";
  /*DIRECCIÓN URL DE HEROKU*/
  //private url = "https://ventasapi.herokuapp.com/api";
  //private url = "https://sistemapuntoventaapi.000webhostapp.com/api";
  //private url = "http://192.168.1.69/ApiVentas/api";
  private url = "http://localhost/ApiVentas/api";

  token: string = null;
  formData = new FormData();
  datos: any;

  constructor(private http: HttpClient) { }

  registrar(datos: AuthModule) {
    return this.http.post(`${ this.url }/registrar`, datos);
  }

  login(datos: AuthModule) {
    return this.http.post(`${ this.url }/login`, datos);
  }

  logout() {
    return this.http.get(`${ this.url }/logout`);
  }

  guardar_token(idtoken: string) {
    this.token = idtoken;
    localStorage.setItem('token', idtoken);
  }

  leer_token() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = null;
    }
    this.formData.append('token', this.token);
    return this.http.post(`${ this.url }/leerToken`, this.formData);
  }

  listausuarios() {
    return this.http.get(`${ this.url }/usuarios`);
  }
}
