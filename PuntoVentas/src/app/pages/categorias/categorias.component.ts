import { Component, OnInit } from '@angular/core';
import { CategoriasServiceService } from '../../services/categorias-service.service';
import { CategoriasModule } from 'src/app/models/categorias/categorias.module';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  datos: any;
  categorias: CategoriasModule = new CategoriasModule();
  formData = new FormData();

  constructor(
    private categoriasservice: CategoriasServiceService,
    private router: Router) { }

    obtenerCategorias() {
      this.categoriasservice.ListarCategorias().subscribe(
        res => {
          this.datos = res['categorias'];
        }
      );
    }

  ngOnInit() {
    this.obtenerCategorias();
  }

  cargar_imagen(event) {
    let elemento = event.target;
    if (elemento.files.length > 0) {
      this.formData.append('imagen', elemento.files[0]);
    }
  }

  guardar(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Espera por favor'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.categorias.nombre);
    this.categoriasservice.RegistrarCategoria(this.formData).subscribe(
      res => {
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        this.obtenerCategorias();
      }
    );
  }

  eliminar(categorias: CategoriasModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar categoria ' + categorias.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.categoriasservice.EliminarCategoria(categorias.id).subscribe(
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
