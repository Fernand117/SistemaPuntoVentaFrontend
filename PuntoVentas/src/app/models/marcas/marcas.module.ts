import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MarcasModule {
  id: number;
  imagen: object;
  nombre: string;
  estado: number;

  constructor() {
    this.estado = 1;
  }
}
