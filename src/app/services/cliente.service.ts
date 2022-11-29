import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClienteDto} from "../dtos/cliente.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ClienteDto[]>(`${environment.apiUrl}/Clientes`);
  }

}
