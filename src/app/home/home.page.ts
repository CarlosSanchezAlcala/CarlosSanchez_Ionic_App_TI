import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../services/usuario.service";
import {UsuarioDto} from "../dtos/usuario.dto";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios: UsuarioDto[] = [];
  nombreUsuario = '';
  celularUsuario = '';
  correoUsuario = '';
  direccionUsuario = '';
  dniUsuario = '';
  turnoUsuario = '';
  apellidoPaternoUsuario = '';
  apellidoMaternoUsuario = '';

  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private authService: AuthService) {

    this.nombreUsuario = this.authService.getSession().nombreUsuario;
    this.celularUsuario = this.authService.getSession().celularUsuario;
    this.correoUsuario = this.authService.getSession().correoUsuario;
    this.direccionUsuario = this.authService.getSession().direccionUsuario;
    this.dniUsuario = this.authService.getSession().dniUsuario;
    this.turnoUsuario = this.authService.getSession().turnoUsuario;
    this.apellidoPaternoUsuario = this.authService.getSession().apellidoPaternoUsuario;
    this.apellidoMaternoUsuario = this.authService.getSession().apellidoMaternoUsuario;
  }

  ngOnInit() {
    this.getUsuarios();
  }

  goToCustomers() {
    this.router.navigate(['/customers'])
  }

  goToInicio() {
    this.router.navigate(['/home'])
  }

  getUsuarios() {
    this.usuarioService.findAll().subscribe(res => {
      this.usuarios = res;
    })
  }

  CerrarSesion() {
    this.authService.deleteSession();
    this.router.navigate(['login']).then();
  }

}
