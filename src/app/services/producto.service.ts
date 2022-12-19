import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductoDto} from "../dtos/producto.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ProductoDto[]>(`${environment.apiUrl}/Productos`);
  }

  findByName(nombreProducto: string) {
    return this.http.get<ProductoDto[]>(`${environment.apiUrl}/Productos/nombres/${nombreProducto}`);
  }

}
