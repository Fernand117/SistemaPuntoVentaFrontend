import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: Component},
  {path: 'Inicio', component: InicioComponent},
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
