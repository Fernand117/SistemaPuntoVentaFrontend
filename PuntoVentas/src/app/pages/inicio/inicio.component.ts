import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import { OrdenesComprasServiceService } from 'src/app/services/ordenes-compras-service.service';
import { ClientesServicesService } from 'src/app/services/clientes-services.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  datos: any;
  orderscount: any;
  clientscount: any;
  productos: any;
  constructor(private prodser: ProductosServiceService,
              private orderser: OrdenesComprasServiceService,
              private clientser: ClientesServicesService) { }

  ngOnInit() {
    this.prodser.TotalProductosRegistrados().subscribe(
      res => {
        this.datos = res['Total'];
      }
    );

    this.orderser.TotalOrdenesCompras().subscribe(
      res => {
        this.orderscount = res['Total'];
      }
    );

    this.clientser.TotalClientes().subscribe(
      res => {
        this.clientscount = res['Total'];
      }
    );

    this.prodser.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }

}
