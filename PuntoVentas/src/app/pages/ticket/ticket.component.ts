import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetallesRemisionService } from '../../services/detalles-remision.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  letras: any;
  datos: any;
  subtotal: any;
  iva: any;
  total: any;
  dtsremision: any;
  formData = new FormData();


  constructor(
    private route: ActivatedRoute,
    private detremserv: DetallesRemisionService) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.formData.append('numero_remision', this.id);
    this.detremserv.ListarDetalleRemision(this.formData).subscribe(
      res => {
        this.datos = res['Remisiones'];
        this.subtotal = res['Subtotal'];
        this.iva = res['IVA'];
        this.total = res['Total'];
        this.dtsremision = res['Detalles'];
        this.letras = res['LetrasTotal'];
      }
    );
  }

  imprimir(){
    window.print();
  }

}
