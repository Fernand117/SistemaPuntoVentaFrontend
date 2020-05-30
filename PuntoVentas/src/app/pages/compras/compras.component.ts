import { Component, OnInit } from '@angular/core';
import { ComprasModule } from '../../models/compras/compras.module';
import { OrdenesComprasServiceService } from '../../services/ordenes-compras-service.service';
import { ProvedoresServicesService } from '../../services/provedores-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compra: ComprasModule = new ComprasModule();
  provedores: any;
  compras: any;
  formData = new FormData();

  constructor(
    private compservice: OrdenesComprasServiceService,
    private proservice: ProvedoresServicesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.compservice.ListarCompras().subscribe(
      res => {
        this.compras = res['OrdenesCompras'];
      }
    );
  }

  eliminar(compras: ComprasModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar la compra ' + compras.remision,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.compservice.Eliminar(compras.id).subscribe(
          res => {
            Swal.fire({
              icon: 'info',
              title: 'Alerta',
              text: res['Mensaje']
            });
            this.compras.splice(i, 1);
          }
        );
      }
    });
  }

}
