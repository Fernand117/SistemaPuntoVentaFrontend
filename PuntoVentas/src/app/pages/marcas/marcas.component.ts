import { Component, OnInit } from '@angular/core';
import { MarcasServiceService } from '../../services/marcas-service.service';
import { MarcasModule } from '../../models/marcas/marcas.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  datos: any;
  constructor(private marcser: MarcasServiceService) { }

  ngOnInit() {
    this.marcser.ListarMarcas().subscribe(
      res => {
        this.datos = res['Marcas'];
      }
    );
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
