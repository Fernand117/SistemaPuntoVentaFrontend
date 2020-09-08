import {Component, OnInit} from '@angular/core';
import {ProductosServiceService} from '../../services/productos-service.service';
import {RemisionesServicesService} from '../../services/remisiones-services.service';
import {Router, ActivatedRoute} from '@angular/router';
import {ClientesServicesService} from '../../services/clientes-services.service';
import {DetallesRemisionModule} from '../../models/detalles-remision/detalles-remision.module';
import Swal from 'sweetalert2';
import {DetallesRemisionService} from '../../services/detalles-remision.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  producto: any;
  remisiones: any;
  clientes: any;
  formData = new FormData();
  detalles: DetallesRemisionModule = new DetallesRemisionModule();

  constructor(
    private prodservice: ProductosServiceService,
    private remservice: RemisionesServicesService,
    private clientservice: ClientesServicesService,
    private detallesservice: DetallesRemisionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.formData.append('codigo', this.id);
    this.prodservice.ListarProductosDetalles(this.formData).subscribe(
      res => {
        this.producto = res['Productos'];
      }
    );

    this.remservice.ListarRemisiones().subscribe(
      res => {
        this.remisiones = res['Remisiones'];
      }
    );
    this.clientservice.ListarClientes().subscribe(
      res => {
        this.clientes = res['Clientes'];
      }
    );
  }

  registrar(form: NgForm) {
    Swal.fire({
      icon: 'info',
      title: 'Espere por favor',
      text: 'Registrando'
    });
    Swal.showLoading();
    this.formData.append('idremision', this.detalles.idremision);
    this.formData.append('idcliente', this.detalles.idcliente.toString());
    this.formData.append('idproducto', this.id);
    this.formData.append('almacen', this.detalles.almacen);
    this.formData.append('cantidad', this.detalles.cantidad.toString());
    this.detallesservice.RegistrarDetalleRemision(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        form.resetForm();
        this.router.navigateByUrl('/Market');
      }
    );
  }

}
