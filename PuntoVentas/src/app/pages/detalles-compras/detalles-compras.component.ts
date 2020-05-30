import { Component, OnInit } from '@angular/core';
import { AlmacenServicesService } from '../../services/almacen-services.service';
import { ProductosServiceService } from '../../services/productos-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlmacenModule } from '../../models/almacen/almacen.module';
import { ProductosModule } from '../../models/productos/productos.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-compras',
  templateUrl: './detalles-compras.component.html',
  styleUrls: ['./detalles-compras.component.css']
})
export class DetallesComprasComponent implements OnInit {

  almacen: AlmacenModule = new AlmacenModule();
  productosM: ProductosModule = new ProductosModule();
  productos: any;
  datos: any;
  formData = new FormData();


  constructor(private almserv: AlmacenServicesService,
              private prodserv: ProductosServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.prodserv.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }

  guardar(form) {
    Swal.fire({
      icon: 'info',
      title: 'Advertencia',
      text: 'Espera por favor'
    });
    Swal.showLoading();
    this.formData.append('idproducto', this.almacen.idproducto.toString());
    this.formData.append('cantidad', this.almacen.cantidad.toString());
    this.formData.append('fechaingreso', this.almacen.fechaingreso);
    this.formData.append('idcompra', this.id);
    this.almserv.RegistrarAlmacen(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        //this.router.navigateByUrl('/Compras');
      }
    );
  }

}
