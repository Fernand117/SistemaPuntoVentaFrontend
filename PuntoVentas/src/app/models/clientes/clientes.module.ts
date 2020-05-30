import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientesModule {
  id: number;
  nombre: string;
  apellidop: string;
  apellidom: string;
  direccion: string;
  telefono: string;
  estado: number;
  constructor() {
    this.estado = 1;
  }
}
