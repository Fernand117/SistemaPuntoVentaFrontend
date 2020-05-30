import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../models/auth/auth.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: AuthModule = new AuthModule();

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form) {
    Swal.fire({
      icon: 'info',
      title: 'Alerta',
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.authservice.login(this.auth).subscribe(
      res => {
        if (res != null) {
          this.authservice.guardar_token(res['user']['token']);
          Swal.close();
          Swal.fire({
            icon: 'info',
            title: 'Alerta',
            text: 'Bienvenido: ' + res['user']['name']
          });
          this.router.navigateByUrl('/Market');
        } else {
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Advertencia',
            text: 'Usuario o contraseña incorrectos'
          });
        }
      }
    );
  }

}
