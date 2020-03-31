import { Component, OnInit } from '@angular/core';
import { SubCategoriasServiceService } from 'src/app/services/sub-categorias-service.service';
import { SubCategoriasModule } from '../../models/sub-categorias/sub-categorias.module';
import Swal from 'sweetalert2';
import { CategoriasServiceService } from '../../services/categorias-service.service';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.css']
})
export class SubcategoriasComponent implements OnInit {

  datos: any;
  categorias: any;
  subcategoria: SubCategoriasModule = new SubCategoriasModule();
  formData = new FormData();

  constructor(private subcategoriasservice: SubCategoriasServiceService,
              private catservi: CategoriasServiceService) { }

  ngOnInit() {
    this.subcategoriasservice.ListarSubcategorias().subscribe(
      res => {
        this.datos = res['Subcategorias'];
      }
    );

    this.catservi.ListarCategorias().subscribe(
      res => {
        this.categorias = res['categorias'];
      }
    );
  }

  cargar_imagen(event) {
    let elemento = event.target;
    if (elemento.files.length > 0) {
      this.formData.append('imagen', elemento.files[0]);
    }
  }

  guardar() {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Espera por favor'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.subcategoria.nombre);
    this.formData.append('idcategoria', this.subcategoria.idcategoria.toString());
    this.subcategoriasservice.RegistrarSubcategoria(this.formData).subscribe(
      res => {
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        location.reload();
      }
    );
  }

  eliminar(subcategorias: SubCategoriasModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar subcategoria ' + subcategorias.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.subcategoriasservice.Eliminar(subcategorias.id).subscribe(
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
