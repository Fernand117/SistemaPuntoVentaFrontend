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
import { ComprasComponent } from './pages/compras/compras.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsEditComponent } from './pages/productos/products-edit/products-edit.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';
import { ComprasAdminComponent } from './pages/compras/compras-admin/compras-admin.component';
import { DetallesComprasComponent } from './pages/detalles-compras/detalles-compras.component';
import { ListaDetallesComprasComponent } from './pages/lista-detalles-compras/lista-detalles-compras.component';
import { ProductosFiltroComponent } from './pages/productos-filtro/productos-filtro.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: Component},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Categorias', component: CategoriasComponent},
  {path: 'Subcategorias', component: SubcategoriasComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Productos/Editar/:id', component: ProductsEditComponent},
  {path: 'Provedores', component: ProvedoresComponent},
  {path: 'Marcas', component: MarcasComponent},
  {path: 'Market', component: MarketComponent},
  {path: 'Almacen', component: AlmacenComponent},
  {path: 'Remisiones', component: RemisionesComponent},
  {path: 'DetallesRemisiones/:id', component: DetallesRemisionComponent},
  {path: 'Productos/Añadir/:id', component: ProductsAddComponent},
  {path: 'Productos/Filtro/:id', component: ProductosFiltroComponent},
  {path: 'Salidas', component: SalidasComponent},
  {path: 'Compras', component: ComprasComponent},
  {path: 'DetallesCompras/:id', component: DetallesComprasComponent},
  {path: 'ComprasAdmin', component: ComprasAdminComponent},
  {path: 'DetallesListaCompras/:id', component: ListaDetallesComprasComponent},
  {path: 'Clientes', component: ClientesComponent},
  {path: 'Registrar', component: RegistrarComponent},
  {path: 'Login', component: LoginComponent},
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
