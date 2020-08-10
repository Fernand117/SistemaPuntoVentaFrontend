import { Component, OnInit } from '@angular/core';
import { ClientesModule } from '../../models/clientes/clientes.module';
import { ClientesServicesService } from '../../services/clientes-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: ClientesModule = new ClientesModule();
  clientes: any;
  formData = new FormData();

  constructor(
    private clientservice: ClientesServicesService,
    private router: Router
  ) { }

  obtenerClientes() {
    this.clientservice.ListarClientes().subscribe(
      res => {
        this.clientes = res['Clientes'];
      }
    );
  }

  ngOnInit() {
    this.obtenerClientes();
  }

  RegistrarCliente(form) {
    Swal.fire({
      icon: 'info',
      title: 'Advertencia',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.cliente.nombre);
    this.formData.append('apellidop', this.cliente.apellidop);
    this.formData.append('apellidom', this.cliente.apellidom);
    this.formData.append('direccion', this.cliente.direccion);
    this.formData.append('telefono', this.cliente.telefono);
    this.clientservice.RegisrarClientes(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Advertencia',
          text: res['Mensaje']
        });
      }
    );
    this.obtenerClientes();
  }

  eliminar(cliente: ClientesModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar el cliente ' + cliente.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.clientservice.EliminarCliente(cliente.id).subscribe(
          res => {
            Swal.fire({
              icon: 'info',
              title: 'Alerta',
              text: res['Mensaje']
            });
            this.clientes.splice(i, 1);
          }
        );
      }
    });
  }

}
