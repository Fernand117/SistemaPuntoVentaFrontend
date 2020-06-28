import { Component, OnInit } from '@angular/core';
import { ProvedoresModule } from '../../models/provedores/provedores.module';
import { ProvedoresServicesService } from '../../services/provedores-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.css']
})
export class ProvedoresComponent implements OnInit {

  formData = new FormData();
  provedores: any;
  provedor: ProvedoresModule =  new ProvedoresModule();

  constructor(
    private provservice: ProvedoresServicesService,
    private router: Router
  ) { }

  obtenerProveedor() {
    this.provservice.ListarProvedores().subscribe(
      res => {
        this.provedores = res['Provedores'];
      }
    );
  }

  ngOnInit() {
    this.obtenerProveedor();
  }

  RegistrarProvedor(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.provedor.nombre);
    this.formData.append('direccion', this.provedor.direccion);
    this.formData.append('telefono', this.provedor.telefono.toString());
    this.provservice.RegistrarProvedor(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Advertencia',
          text: res['Mensaje']
        });
      }
    );
    this.obtenerProveedor();
  }

  eliminar(provedores: ProvedoresModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar el provedor ' + provedores.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.provservice.EliminarProvedor(provedores.id).subscribe(
          res => {
            Swal.fire({
              icon: 'info',
              title: 'Alerta',
              text: res['Mensaje']
            });
            this.provedores.splice(i, 1);
          }
        );
      }
    });
  }

}
