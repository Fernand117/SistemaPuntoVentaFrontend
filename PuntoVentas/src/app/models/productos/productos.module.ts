import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductosModule {
  codigo: number;
  imagen: Object;
  nombre: string;
  descripcion: string;
  idcategoria: number;
  idsubcategoria: number;
  idmarca: number;
  idprovedor: number;
  estado: number;
  constructor() {
    this.estado = 1;
  }
}
