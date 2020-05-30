import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoriasModule {
  id: number;
  imagen: string;
  nombre: string;
  estado: number;

  constructor() {
    this.estado = 1;
  }
}
