import { Component, OnInit } from '@angular/core';
import { ClientesModule } from '../../../models/clientes/clientes.module';
import { ClientesServicesService } from '../../../services/clientes-services.service';
import Swal from 'sweetalert2';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-clientes-editar',
  templateUrl: './clientes-editar.component.html',
  styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent implements OnInit {

  formData: FormData = new FormData();

  constructor() { }

  ngOnInit() {
  }

}
