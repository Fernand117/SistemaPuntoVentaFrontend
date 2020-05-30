import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit {

  tokenUser: any;

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authservice.leer_token().subscribe(
      res => {
        this.tokenUser = res['Usuario'];
      }
    );
  }

  logout() {
    Swal.fire({
      icon: 'question',
      title: 'Advertencia',
      text: '¿Desea cerrar sesión?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.authservice.logout().subscribe(
          res => {
            Swal.fire({
              icon: 'info',
              title: 'Alerta',
              text: res['Mensaje']
            });
            this.router.navigateByUrl('/Login');
          }
        );
      }
    });
  }

}
