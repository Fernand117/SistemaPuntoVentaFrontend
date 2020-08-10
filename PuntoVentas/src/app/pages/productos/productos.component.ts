import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { MarcasServiceService } from '../../services/marcas-service.service';
import { CategoriasServiceService } from '../../services/categorias-service.service';
import { SubCategoriasServiceService } from '../../services/sub-categorias-service.service';
import { ProvedoresServicesService } from '../../services/provedores-services.service';
import { ProductosModule } from '../../models/productos/productos.module';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productosM: ProductosModule = new ProductosModule();
  productos: any;
  marcas: any;
  subcategorias: any;
  categorias: any;
  provedores: any;
  formData = new FormData();

  constructor(private prodservice: ProductosServiceService,
              private marser: MarcasServiceService,
              private catser: CategoriasServiceService,
              private subser: SubCategoriasServiceService,
              private provser: ProvedoresServicesService,
              private route: Router) { }

  obtenerProductos() {
    this.prodservice.ListarProductos().subscribe(
      res => {
        this.productos = res['Productos'];
      }
    );
  }

  ngOnInit() {
    this.obtenerProductos();
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

  guardar(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Esperar por favor'
    });
    Swal.showLoading();
    this.formData.append('codigo', this.productosM.codigo);
    this.formData.append('nombre', this.productosM.nombre);
    this.formData.append('descripcion', this.productosM.descripcion);
    this.formData.append('idcategoria', this.productosM.idcategoria.toString());
    this.formData.append('idsubcategoria', this.productosM.idsubcategoria.toString());
    this.formData.append('idmarca', this.productosM.idmarca.toString());
    this.formData.append('idprovedor', this.productosM.idprovedor.toString());
    this.formData.append('precio', this.productosM.precio.toString());
    this.prodservice.RegistrarProducto(this.formData).subscribe(
      res => {
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: res['Mensaje']
        });
        this.obtenerProductos();
      }
    );
  }


  eliminar(producto: ProductosModule, i: number) {
    Swal.fire({
      title: 'Alerta',
      text: 'Eliminar categoria ' + producto.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.prodservice.EliminarProducto(producto.codigo).subscribe(
          res => {
            Swal.fire({
              icon: 'info',
              title: 'Alerta',
              text: res['Mensaje']
            });
            this.productos.splice(i, 1);
          }
        );
      }
    });
  }
}
