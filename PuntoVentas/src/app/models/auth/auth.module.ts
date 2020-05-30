import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
  paterno: string;
  materno: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
