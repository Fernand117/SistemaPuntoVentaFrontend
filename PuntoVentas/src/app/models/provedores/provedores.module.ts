import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProvedoresModule {
  id: number;
  nombre: string;
  direccion: string;
  telefono: number;
  estado: number;
  constructor() {
    this.estado = 1;
  }
}
