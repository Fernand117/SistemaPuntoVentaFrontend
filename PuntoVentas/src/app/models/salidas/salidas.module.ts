import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SalidasModule {
  id: number;
  idproducto: string;
  cantidadsalida: number;
  cantidadretorno: number;
  numerounidad: number;
  fechasalida: Date;
  estado: number;

  constructor() {
    this.estado = 1;
  }
}
