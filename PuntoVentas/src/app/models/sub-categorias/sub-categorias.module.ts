import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SubCategoriasModule {
  id: number;
  imagen: string;
  nombre: string;
  idcategoria: number;
  estado: number;
  constructor(){
    this.estado = 1;
  }
}
