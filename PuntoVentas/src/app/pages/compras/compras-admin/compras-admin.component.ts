import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvedoresServicesService } from '../../../services/provedores-services.service';
import { OrdenesComprasServiceService } from '../../../services/ordenes-compras-service.service';
import { ComprasModule } from '../../../models/compras/compras.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras-admin',
  templateUrl: './compras-admin.component.html',
  styleUrls: ['./compras-admin.component.css']
})
export class ComprasAdminComponent implements OnInit {

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
    this.proservice.ListarProvedores().subscribe(
      res => {
        this.provedores = res['Provedores'];
      }
    );
  }

  RegisrarCompras(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Registrando compra'
    });
    Swal.showLoading();
    this.formData.append('remision_compra', this.compra.remision);
    this.formData.append('fecha_entrega', this.compra.fecha.toString());
    this.formData.append('idprovedor', this.compra.idprovedor.toString());
    this.compservice.RegistrarCompra(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Advertencia',
          text: res['Mensaje']
        });
      }
    );
    this.router.navigateByUrl('/Compras');
  }

}
