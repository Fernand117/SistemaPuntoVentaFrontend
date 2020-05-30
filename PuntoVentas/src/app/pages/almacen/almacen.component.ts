import { Component, OnInit } from '@angular/core';
import { AlmacenServicesService } from '../../services/almacen-services.service';
import { AlmacenModule } from '../../models/almacen/almacen.module';
import { ProductosModule } from '../../models/productos/productos.module';
import { ProductosServiceService } from '../../services/productos-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  almacen: AlmacenModule = new AlmacenModule();
  productosM: ProductosModule = new ProductosModule();
  productos: any;
  datos: any;

  formData = new FormData();

  constructor(private almserv: AlmacenServicesService,
              private prodserv: ProductosServiceService,
              private router: Router) { }

  ngOnInit() {
    this.almserv.ListarAlmacen().subscribe(
      res => {
        this.datos = res['Stock'];
      }
    );
    this.prodserv.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }
}
