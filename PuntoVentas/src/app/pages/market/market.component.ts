import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  productos: any;

  constructor(private prodserv: ProductosServiceService) { }

  ngOnInit() {
    this.prodserv.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }

}
