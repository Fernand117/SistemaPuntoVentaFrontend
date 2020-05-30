import { Component, OnInit } from '@angular/core';
import { ProductosModule } from '../../../models/productos/productos.module';
import { ProductosServiceService } from '../../../services/productos-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MarcasServiceService } from '../../../services/marcas-service.service';
import { CategoriasServiceService } from '../../../services/categorias-service.service';
import { SubCategoriasServiceService } from '../../../services/sub-categorias-service.service';
import { ProvedoresServicesService } from '../../../services/provedores-services.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  codproduct: string;
  productodetalle: any;
  productos: ProductosModule = new ProductosModule();
  formData =  new FormData();
  marcas: any;
  subcategorias: any;
  categorias: any;
  provedores: any;


  constructor(
    private prodservice: ProductosServiceService,
    private marser: MarcasServiceService,
    private catser: CategoriasServiceService,
    private subser: SubCategoriasServiceService,
    private provser: ProvedoresServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.formData.append('codigo', this.id);
    this.prodservice.ListarProductosDetalles(this.formData).subscribe(
      res => {
        this.productodetalle = res['Productos'];
      }
    );
    this.catser.ListarCategorias().subscribe(
      res => {
        this.categorias = res['categorias'];
      }
    );
    this.subser.ListarSubcategorias().subscribe(
      res => {
        this.subcategorias = res['Subcategorias'];
      }
    );
    this.marser.ListarMarcas().subscribe(
      res => {
        this.marcas = res['Marcas'];
      }
    );
    this.provser.ListarProvedores().subscribe(
      res => {
        this.provedores = res['Provedores'];
      }
    );
  }

  cargar_imagen(event) {
    let elemento = event.target;
    if (elemento.files.length > 0) {
      this.formData.append('imagen', elemento.files[0]);
    }
  }

  Actualizar(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Actualizando, espere por favor'
    });
    Swal.showLoading();
    this.formData.append('nombre', this.productos.nombre);
    this.formData.append('descripcion', this.productos.descripcion);
    this.formData.append('idcategoria', this.productos.idcategoria.toString());
    this.formData.append('idsubcategoria', this.productos.idsubcategoria.toString());
    this.formData.append('idmarca', this.productos.idmarca.toString());
    this.formData.append('idprovedor', this.productos.idprovedor.toString());
    this.formData.append('precio', this.productos.precio);
    this.prodservice.EditarProducto(Number(this.id), this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        this.router.navigateByUrl('/Productos');
      }
    );
  }
}
