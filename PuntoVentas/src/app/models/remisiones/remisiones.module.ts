import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RemisionesModule {
  id: number;
  fecharemision: string;
  numeroremision: string;
  estadoremision: string;
  descripcion: string;
  total: number;
  idusuario: number;
  venta: number;
  constructor() {
    this.idusuario = 1;
    this.venta = 1;
  }
}
