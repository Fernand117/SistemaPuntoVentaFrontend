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
    SalidasComponent
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
