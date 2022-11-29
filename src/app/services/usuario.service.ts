import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UsuarioDto} from "../dtos/usuario.dto";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<UsuarioDto[]>(`${environment.apiUrl}/Usuario`)
  }
}
