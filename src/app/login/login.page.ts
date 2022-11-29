import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {AuthService} from "../services/auth.service";
import {LoginDto} from "../dtos/login.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = new FormGroup<any>({});

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastController: ToastController,
              private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    const login: LoginDto = {
      dniUsuario: this.loginForm.controls['email'].value,
      claveUsuario: this.loginForm.controls['password'].value,
    }
    this.authService.auth(login).subscribe(res => {
      if (res && res.length > 0) {
        const user = res[0];
        console.log('Usuario existente.', res);
        switch (user.estadoUsuario) {
          case "A":
            this.authService.setSession(user);
            this.router.navigate(['home']);
            this.loginForm.reset();
            console.log('Usuario', this.authService.getSession());
            break;
          case "I":
            this.ShowMessage('Tus credenciales se encuentran inactivos.');
            break;
          default:
            this.ShowMessage('El estado de tu cuenta es desconocido, comunicate con soporte.');
            break;
        }
      } else {
        console.log('No tienes acceso.');
        this.ShowMessage('El usuario y/o contraseña es incorrecto.');
      }
    })
  }

  async ShowMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

}
