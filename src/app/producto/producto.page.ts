import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductoService} from "../services/producto.service";
import {ProductoDto} from "../dtos/producto.dto";
import {FormControl} from "@angular/forms";
import {debounceTime, switchMap} from "rxjs";
import {search} from "ionicons/icons";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productos: ProductoDto[] = [];
  searchControls: FormControl = new FormControl<any>('');

  constructor(private router: Router,
              private productoService: ProductoService) { }

  ngOnInit() {
    this.getProducto();
    this.initSearch();
  }

  goToCustomers() {
    this.router.navigate(['/customers'])
  }

  goToInicio() {
    this.router.navigate(['/home'])
  }

  getProductos() {
    this.router.navigate(['producto'])
  }

  getProducto() {
    this.productoService.findAll().subscribe(res => {
      this.productos = res;
    })
  }

  initSearch() {
    this.searchControls.valueChanges
      .pipe(
        debounceTime(1),
        switchMap(search => {
          if (search) {
            return this.productoService.findByName(search);
          }
          return this.productoService.findAll();
        })
      ).subscribe(res => {
        this.productos = res;
        console.log('Respuesta:', res)
    })
  }

}
