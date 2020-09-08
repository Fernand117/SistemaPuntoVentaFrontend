import { Component, OnInit } from '@angular/core';
import { RemisionesServicesService } from '../../services/remisiones-services.service';
import { RemisionesModule } from '../../models/remisiones/remisiones.module';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ClientesServicesService } from '../../services/clientes-services.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-remisiones',
  templateUrl: './remisiones.component.html',
  styleUrls: ['./remisiones.component.css']
})
export class RemisionesComponent implements OnInit {

  datos: any;
  remisiones: RemisionesModule = new RemisionesModule();
  formData = new FormData();
  tokenUser: any;
  nmuser: any;

  constructor(
    private remservi: RemisionesServicesService,
    private authservice: AuthService,
    private router: Router,
    private clientservice: ClientesServicesService
  ) { }

  obtenerRemisiones() {
    this.remservi.ListarRemisiones().subscribe(
      res => {
        this.datos = res['Remisiones'];
      }
    );
  }

  ngOnInit() {
    this.obtenerRemisiones();
    this.authservice.leer_token().subscribe(
      res => {
        this.tokenUser = res['Usuario'];
        this.nmuser = res['Usuario']['0']['id'];
      }
    );
  }

  guardar(form: NgForm) {
    Swal.fire({
      icon: 'info',
      title: 'Espere por favor',
      text: 'Registrando nueva remisión'
    });
    Swal.showLoading();
    this.formData.append('idusuario', this.nmuser);
    this.remservi.RegistrarRemisiones(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        form.resetForm();
        this.obtenerRemisiones();
      }
    );
  }

  eliminar(remmodel: RemisionesModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar remisión ' + remmodel.numeroremision,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.remservi.EliminarRemision(remmodel.id).subscribe(
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

}
