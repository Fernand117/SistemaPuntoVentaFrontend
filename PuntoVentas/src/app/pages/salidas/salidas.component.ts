import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { SalidasModule } from '../../models/salidas/salidas.module';
import { SalidasServiceService } from '../../services/salidas-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

  salidas: SalidasModule = new SalidasModule();
  datossalida: any;
  productoslista: any;
  formData = new FormData();

  constructor(
    private prodservice: ProductosServiceService,
    private salservice: SalidasServiceService,
    private router: Router
  ) { }

  obtenerSalidas() {
    this.salservice.ListarSalidas().subscribe(
      res => {
        this.datossalida = res['Salidas'];
      }
    );
  }

  ngOnInit() {
    this.obtenerSalidas();
    this.prodservice.ListarProductos().subscribe(
      res => {
        this.productoslista = res['Productos'];
      }
    );
  }

  RegistrarSalida(form: NgForm) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.formData.append('idproducto', this.salidas.idproducto);
    this.formData.append('cantidadsalida', this.salidas.cantidadsalida.toString());
    this.formData.append('cantidadretorno', this.salidas.cantidadretorno.toString());
    this.formData.append('numerounidad', this.salidas.numerounidad.toString());
    this.formData.append('fechasalida', this.salidas.fechasalida.toString());
    this.salservice.RegistrarSalida(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        form.resetForm();
        this.obtenerSalidas();
      }
    );
  }
}
