import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { SubcategoriasComponent } from './pages/subcategorias/subcategorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { MarketComponent } from './pages/market/market.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { RemisionesComponent } from './pages/remisiones/remisiones.component';
import { DetallesRemisionComponent } from './pages/detalles-remision/detalles-remision.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { SalidasComponent } from './pages/salidas/salidas.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: Component},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Categorias', component: CategoriasComponent},
  {path: 'Subcategorias', component: SubcategoriasComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Marcas', component: MarcasComponent},
  {path: 'Market', component: MarketComponent},
  {path: 'Almacen', component: AlmacenComponent},
  {path: 'Remisiones', component: RemisionesComponent},
  {path: 'DetallesRemisiones/:id', component: DetallesRemisionComponent},
  {path: 'Productos/Añadir/:id', component: ProductsAddComponent},
  {path: 'Salidas', component: SalidasComponent},
  {path: '', redirectTo: 'Market', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
