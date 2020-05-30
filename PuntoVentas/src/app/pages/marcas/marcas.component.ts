import { Component, OnInit } from '@angular/core';
import { MarcasServiceService } from '../../services/marcas-service.service';
import { MarcasModule } from '../../models/marcas/marcas.module';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  datos: any;
  marca: MarcasModule = new MarcasModule();
  formData = new FormData();

  constructor(
    private marcser: MarcasServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.marcser.ListarMarcas().subscribe(
      res => {
        this.datos = res['Marcas'];
      }
    );
  }

  cargar_imagen(event) {
    let elemento = event.target;
    if (elemento.files.length > 0) {
      this.formData.append('imagen', elemento.files[0]);
    }
  }

  RegistrarMarca(form) {
    Swal.fire({
      icon: 'info',
      title: 'Espere por favor',
      text: 'Registrando marca'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.marca.nombre);
    this.marcser.RegistrarMarca(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Advertencia',
          text: res['Mensaje']
        });
      }
    );
    this.router.navigateByUrl('/Inicio');
  }

  eliminar(marcas: MarcasModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar la marca ' + marcas.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.marcser.EliminarMarca(marcas.id).subscribe(
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
