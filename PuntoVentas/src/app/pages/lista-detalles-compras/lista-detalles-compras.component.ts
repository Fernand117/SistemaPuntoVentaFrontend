import { Component, OnInit } from '@angular/core';
import { OrdenesComprasServiceService } from '../../services/ordenes-compras-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-detalles-compras',
  templateUrl: './lista-detalles-compras.component.html',
  styleUrls: ['./lista-detalles-compras.component.css']
})
export class ListaDetallesComprasComponent implements OnInit {

  lista: any;
  total: any;
  formdata = new FormData();

  constructor(
    private listaserv: OrdenesComprasServiceService,
    private route: ActivatedRoute
  ) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.formdata.append('idcompra', this.id);
    this.listaserv.ListarDetallesComprasProductos(this.formdata).subscribe(
      res => {
        this.lista = res['DetallesCompra'];
        this.total = res['Total'];
      }
    );
  }

}
