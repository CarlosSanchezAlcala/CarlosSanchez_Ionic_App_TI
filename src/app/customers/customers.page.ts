import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClienteService} from "../services/cliente.service";
import {ClienteDto} from "../dtos/cliente.dto";
import {debounce, debounceTime, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {ViewWillEnter} from "@ionic/angular";
import {AlertaService} from "../services/alerta.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements ViewWillEnter {

  clientes: ClienteDto[] = [];
  searchControl: FormControl = new FormControl<any>('');

  constructor(private router: Router,
              private alertaService: AlertaService,
              private clienteService: ClienteService) { }

  ionViewWillEnter() {
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

  getProducto() {
    this.router.navigate(['producto'])
  }

  goToNuevoCliente(cliente?: ClienteDto) {
    if (cliente) {
      this.clienteService.clienteSelected = cliente;
    }
    this.router.navigate(['/cliente-save'])
  }

  eliminarCliente(idCliente: number) {
    this.clienteService.delete(idCliente).subscribe( () => {
      this.alertaService.ShowMessage('Se elimino al cliente');
      this.getCliente();
    })
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
