import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {UsuarioService} from "./services/usuario.service";
import {UsuarioDto} from "./dtos/usuario.dto";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Clientes', url: '/customers', icon: 'people' },
    { title: 'Producto', url: '/producto', icon: 'pricetag' },
    { title: 'Cerrar Sesion', url: '/login', icon: 'exit' },
  ];

  usuarios: UsuarioDto[] = [];
  nombreUsuario = '';
  apellidoPaternoUsuario = '';
  apellidoMaternoUsuario = '';

  constructor(private authService: AuthService,
              private usuarioService: UsuarioService) {

    this.nombreUsuario = this.authService.getSession().nombreUsuario;
    this.apellidoPaternoUsuario = this.authService.getSession().apellidoPaternoUsuario;
    this.apellidoMaternoUsuario = this.authService.getSession().apellidoMaternoUsuario;

  }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.findAll().subscribe(res => {
      this.usuarios = res;
    })
  }

}
