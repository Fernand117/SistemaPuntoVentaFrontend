import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { empty } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductosModule {
  codigo: string;
  imagen: Object;
  nombre: any;
  descripcion: any;
  idcategoria: any;
  idsubcategoria: any;
  idmarca: any;
  idprovedor: any;
  precio: any;
  estado: number;
  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.estado = 1;
    this.idcategoria = "";
    this.idsubcategoria = "";
    this.idmarca = "";
    this.idprovedor = "";
    this.precio = "";
  }
}
