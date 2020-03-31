import { Component, OnInit } from '@angular/core';
import { DetallesRemisionService } from '../../services/detalles-remision.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-remision',
  templateUrl: './detalles-remision.component.html',
  styleUrls: ['./detalles-remision.component.css']
})
export class DetallesRemisionComponent implements OnInit {

  datos: any;
  subtotal: any;
  total: any;
  formData = new FormData();
  constructor(private detremserv: DetallesRemisionService,
              private router: Router,
              private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id');
  ngOnInit() {
      this.formData.append('numero_remision', this.id);
      this.detremserv.ListarDetalleRemision(this.formData).subscribe(
        res => {
          this.datos = res['Remisiones'];
          this.subtotal = res['Subtotal'];
          this.total = res['Total'];
        }
      );
  }

  imprimir(nombrediv) {
    var contenido= document.getElementById(nombrediv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;
     document.body.innerHTML = contenido;
     window.print();
     document.body.innerHTML = contenidoOriginal;
  }
}
