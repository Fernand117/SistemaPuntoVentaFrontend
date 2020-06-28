import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.rutes';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { SubcategoriasComponent } from './pages/subcategorias/subcategorias.component';
import { HttpClientModule } from '@angular/common/http';
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
import { TicketComponent } from './pages/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    MenuadminComponent,
    CategoriasComponent,
    SubcategoriasComponent,
    ProductosComponent,
    MarcasComponent,
    MarketComponent,
    AlmacenComponent,
    RemisionesComponent,
    DetallesRemisionComponent,
    ProductsAddComponent,
    SalidasComponent,
    ComprasComponent,
    RegistrarComponent,
    LoginComponent,
    ProductsEditComponent,
    ClientesComponent,
    ProvedoresComponent,
    ComprasAdminComponent,
    DetallesComprasComponent,
    ListaDetallesComprasComponent,
    ProductosFiltroComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
