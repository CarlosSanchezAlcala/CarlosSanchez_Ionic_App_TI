import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClienteService} from "../services/cliente.service";
import {ClienteDto} from "../dtos/cliente.dto";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  clientes: ClienteDto[] = [];

  constructor(private router: Router,
              private clienteService: ClienteService) { }

  ngOnInit() {
    this.getCliente();
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

}
