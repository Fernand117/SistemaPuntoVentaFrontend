import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ComprasModule {
  id: number;
  remision: string;
  fecha: Date;
  idprovedor: number;
  estado: number;
  constructor() {
    this.estado = 1;
  }
}
