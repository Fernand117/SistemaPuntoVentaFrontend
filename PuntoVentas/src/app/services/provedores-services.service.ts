import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvedoresServicesService {

  private url = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  ListarProvedores(){
    return this.http.get(`${ this.url }/provedores`);
  }
}
