import { Component, OnInit } from '@angular/core';
import { ClientesModule } from '../../../models/clientes/clientes.module';
import { ClientesServicesService } from '../../../services/clientes-services.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes-editar',
  templateUrl: './clientes-editar.component.html',
  styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent implements OnInit {

  formData: FormData = new FormData();
  clientes: ClientesModule = new ClientesModule();
  cilenteDetalle: any;


  constructor(
    private clienteService: ClientesServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.formData.append('idcliente', this.id);
    this.clienteService.ListarClienteDetalle(this.formData).subscribe(
      res =>{
        this.cilenteDetalle = res['Clientes'];
      }
    );
  }

  actualizarCliente(form: NgForm) {
    Swal.fire({
      icon: 'info',
      title: 'Advertencia',
      text: 'Actualizando clientes, espere por favor'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.clientes.nombre);
    this.formData.append('apellidop', this.clientes.apellidop);
    this.formData.append('apellidom', this.clientes.apellidom);
    this.formData.append('direccion', this.clientes.direccion);
    this.formData.append('telefono', this.clientes.telefono);
    this.clienteService.EditarCliente(this.formData, Number(this.id)).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        form.resetForm();
        this.router.navigateByUrl('/Clientes');
      }
    );
  }

}
