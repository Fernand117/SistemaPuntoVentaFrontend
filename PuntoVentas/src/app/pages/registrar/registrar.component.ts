import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../models/auth/auth.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  auth: AuthModule = new AuthModule();
  usuarios: any;

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authservice.listausuarios().subscribe(
      res => {
        console.log(res['Usuarios']);
        this.usuarios = res['Usuarios'];
      }
    );
  }

  registrar(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.authservice.registrar(this.auth).subscribe(
      res => {
        this.authservice.guardar_token(res['user']['token']);
        Swal.close();
        Swal.fire({
          icon: 'info',
          title: 'Alerta',
          text: 'Bienvenido (a): ' + res['user']['name']
        });
        this.router.navigateByUrl('/Market');
      }
    );
  }
}
