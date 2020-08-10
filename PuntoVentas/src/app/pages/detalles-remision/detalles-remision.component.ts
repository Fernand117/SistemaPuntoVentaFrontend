import { Component, OnInit } from '@angular/core';
import { DetallesRemisionService } from '../../services/detalles-remision.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DetallesRemisionModule } from '../../models/detalles-remision/detalles-remision.module';
import Swal from 'sweetalert2';
import { RemisionesModule } from '../../models/remisiones/remisiones.module';
import { RemisionesServicesService } from '../../services/remisiones-services.service';
import { ClientesServicesService } from '../../services/clientes-services.service';
import { ProductosServiceService } from '../../services/productos-service.service';

@Component({
  selector: 'app-detalles-remision',
  templateUrl: './detalles-remision.component.html',
  styleUrls: ['./detalles-remision.component.css']
})

export class DetallesRemisionComponent implements OnInit {

  totalForm: any;
  letras: any;
  datos: any;
  subtotal: any;
  iva: any;
  total: any;
  dtsremision: any;
  clientes: any;
  productos: any;
  idrem: number;

  formData = new FormData();
  remisiones: RemisionesModule = new RemisionesModule();
  detalles: DetallesRemisionModule = new DetallesRemisionModule();

  constructor(private detremserv: DetallesRemisionService,
              private router: Router,
              private route: ActivatedRoute,
              private reservice: RemisionesServicesService,
              private detallesservice: DetallesRemisionService,
              private clientservice: ClientesServicesService,
              private prodservice: ProductosServiceService) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {

    this.clientservice.ListarClientes().subscribe(
      res => {
        this.clientes = res['Clientes'];
      }
    );

    this.prodservice.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );

  }

  imprimirTicket() {
    this.router.navigate(['/Ticket', this.id]);
  }

  cargarProductos() {
    this.formData.append('numero_remision', this.id);

    this.detremserv.ListarDetalleRemision(this.formData).subscribe(
      res => {
        this.datos = res['Remisiones'];
        this.subtotal = res['Subtotal'];
        this.iva = res['IVA'];
        this.total = res['Total'];
        this.dtsremision = res['Detalles'];
        this.letras = res['LetrasTotal'];
      }
    );

  }

  imprimir(nombrediv) {
    var contenido= document.getElementById(nombrediv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;
     document.body.innerHTML = contenido;
     window.print();
     document.body.innerHTML = contenidoOriginal;
  }

  venta(form) {
    this.totalForm = this.total['0']['total'];
    console.log(this.totalForm);
    Swal.fire({
      title: 'Alerta',
      text: 'Espere por favor',
      icon: 'warning'
    });
    Swal.showLoading();
    this.formData.append('idremision', this.id);
    this.formData.append('total', this.totalForm);
    this.reservice.ActualizarRemision(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Adevertencia',
          text: res['Mensaje']
        });
        this.router.navigateByUrl('/Remisiones');
      }
    );
  }

  eliminar(dtremision: DetallesRemisionModule, idproducto: any, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Desea eliminar este producto ' + dtremision.idproducto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        console.log(idproducto);
        this.detremserv.EliminarProductoRemision(idproducto).subscribe(
          res => {
            Swal.fire({
              icon: 'info',
              title: 'Alerta',
              text: res['Mensaje']
            });
            this.datos.splice(i, 1);
          }
        );
      }
    });
  }

  registrar(form) {
    Swal.fire({
      icon: 'info',
      title: 'Espere por favor',
      text: 'Registrando'
    });
    Swal.showLoading();
    this.formData.append('idremision', this.id);
    this.formData.append('idcliente', this.detalles.idcliente.toString());
    this.formData.append('idproducto', this.detalles.idproducto.toString());
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
      }
    );
  }

}
