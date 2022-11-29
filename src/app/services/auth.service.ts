import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../dtos/login.dto";
import {environment} from "../../environments/environment";
import {UsuarioDto} from "../dtos/usuario.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(login: LoginDto) {
    return this.http.post<UsuarioDto[]>(`${environment.apiUrl}/auth/login`, login);
  }

  setSession(usuario: UsuarioDto) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getSession(): UsuarioDto {
    const user = localStorage.getItem('usuario');
    return JSON.parse(user ? user: "");
  }

  deleteSession() {
    localStorage.removeItem('usuario');
  }

}
