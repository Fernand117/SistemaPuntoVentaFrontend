import { Component, OnInit } from '@angular/core';
import { ProductosModule } from '../../models/productos/productos.module';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-filtro',
  templateUrl: './productos-filtro.component.html',
  styleUrls: ['./productos-filtro.component.css']
})
export class ProductosFiltroComponent implements OnInit {

  formData = new FormData();
  productos: any;

  constructor(
    private prodservice: ProductosServiceService,
    private route: ActivatedRoute
  ) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    console.log(this.id);
    this.prodservice.FiltrarProducto(this.id).subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }

}
