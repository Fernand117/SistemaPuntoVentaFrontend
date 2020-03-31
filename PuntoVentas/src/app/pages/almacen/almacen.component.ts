import { Component, OnInit } from '@angular/core';
import { AlmacenServicesService } from '../../services/almacen-services.service';
import { AlmacenModule } from '../../models/almacen/almacen.module';
import { ProductosModule } from '../../models/productos/productos.module';
import { ProductosServiceService } from '../../services/productos-service.service';
import Swal from 'sweetalert2';

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
              private prodserv: ProductosServiceService) { }

  ngOnInit() {
    this.almserv.ListarAlmacen().subscribe(
      res => {
        this.datos = res['Almacen'];
      }
    );
    this.prodserv.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }

  guardar(){
    Swal.fire({
      icon: 'info',
      title: 'Advertencia',
      text: 'Espera por favor'
    });
    Swal.showLoading();
    this.formData.append('idproducto', this.almacen.idproducto.toString());
    this.formData.append('cantidad', this.almacen.cantidad.toString());
    this.formData.append('fechaingreso', this.almacen.fechaingreso);
    this.almserv.RegistrarAlmacen(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        location.reload();
      }
    );
  }

}
