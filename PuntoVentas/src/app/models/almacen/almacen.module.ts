import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlmacenModule {
  idproducto: number;
  cantidad: number;
  fechaingreso: string;
  estado: number;
  constructor() {
    this.estado = 1;
  }
}
