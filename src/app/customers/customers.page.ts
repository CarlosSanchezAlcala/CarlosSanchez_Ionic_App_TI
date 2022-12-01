import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClienteService} from "../services/cliente.service";
import {ClienteDto} from "../dtos/cliente.dto";
import {debounce, debounceTime, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  clientes: ClienteDto[] = [];
  searchControl: FormControl = new FormControl<any>('');

  constructor(private router: Router,
              private clienteService: ClienteService) { }

  ngOnInit() {
    this.getCliente();
    this.initSearch();
  }

  goToCustomers() {
    this.router.navigate(['/customers'])
  }

  goToInicio() {
    this.router.navigate(['/home'])
  }

  getCliente() {
    this.clienteService.findAll().subscribe(res => {
      this.clientes = res;
    })
  }

  goToNuevoCliente() {
    this.router.navigate(['/cliente-save'])
  }

  initSearch() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1),
        switchMap(search => {
          if (search) {
            return this.clienteService.findByName(search);
          }
          return this.clienteService.findAll();
        })
      ).subscribe(res => {
      this.clientes = res;
      console.log('Respuesta:', res)
    });
  }

}
