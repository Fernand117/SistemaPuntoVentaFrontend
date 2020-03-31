import { Component, OnInit } from '@angular/core';
import { RemisionesServicesService } from '../../services/remisiones-services.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { RemisionesModule } from '../../models/remisiones/remisiones.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remisiones',
  templateUrl: './remisiones.component.html',
  styleUrls: ['./remisiones.component.css']
})
export class RemisionesComponent implements OnInit {

  datos: any;
  remisiones: RemisionesModule = new RemisionesModule();
  formData = new FormData();

  constructor(private remservi: RemisionesServicesService) { }

  ngOnInit() {
    this.remservi.ListarRemisiones().subscribe(
      res => {
        this.datos = res['Remisiones'];
      }
    );
  }

  guardar() {
    Swal.fire({
      icon: 'info',
      title: 'Espere por favor',
      text: 'Registrando nueva remisión'
    });
    Swal.showLoading();
    this.formData.append('fecha_remision', this.remisiones.fecharemision);
    this.formData.append('numero_remision', this.remisiones.numeroremision);
    this.formData.append('estado_remision', this.remisiones.estadoremision);
    this.formData.append('descripcion', this.remisiones.descripcion);
    this.remservi.RegistrarRemisiones(this.formData).subscribe(
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
