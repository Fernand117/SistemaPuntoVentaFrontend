import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DetallesRemisionModule {
  idremision: string;
  idcliente: number;
  idproducto: string;
  almacen: string;
  cantidad: number;
  subtotal: number;
  estado: number;
  precio: number;
  constructor() {
    this.estado = 1;
  }
}
