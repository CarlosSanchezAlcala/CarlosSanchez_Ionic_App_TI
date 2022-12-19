import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClienteDto} from "../dtos/cliente.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteSelected: ClienteDto | undefined = undefined;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ClienteDto[]>(`${environment.apiUrl}/Clientes`);
  }

  register(Clientes: ClienteDto) {
    return this.http.post<ClienteDto>(`${environment.apiUrl}/Clientes`, Clientes);
  }

  findByName(nombrecliente: string) {
    return this.http.get<ClienteDto[]>(`${environment.apiUrl}/Clientes/nombre/${nombrecliente}`);
  }

  update(Clientes: ClienteDto) {
    return this.http.put<ClienteDto>(`${environment.apiUrl}/Clientes`, Clientes);
  }

  delete(idCliente: number) {
    return this.http.delete(`${environment.apiUrl}/Clientes/delete/${idCliente}`);
  }

}
