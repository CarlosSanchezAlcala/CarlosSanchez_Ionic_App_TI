import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ClienteDto, Ubigeo} from "../dtos/cliente.dto";
import {ClienteService} from "../services/cliente.service";
import {ToastController} from "@ionic/angular";
import {UbigeoService} from "../services/ubigeo.service";
import {search} from "ionicons/icons";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-cliente-save',
  templateUrl: './cliente-save.page.html',
  styleUrls: ['./cliente-save.page.scss'],
})
export class ClienteSavePage implements OnInit {

  clienteForm: FormGroup = new FormGroup<any>({});
  ubigeos: Ubigeo[] = [];
  clientes: ClienteDto[] = [];
  searchControl: FormControl = new FormControl<any>({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public clienteService: ClienteService,
              private toastController: ToastController,
              private ubigeoService: UbigeoService) { }

  ngOnInit() {
    this.initClienteForm();
    this.listarUbigeos();
  }

  listarUbigeos() {
    this.ubigeoService.find().subscribe(res => {
      this.ubigeos = res;
    });
  }

  goToCustomers() {
    this.router.navigate(['/customers'])
  }

  getCliente() {
    this.clienteService.findAll().subscribe(res => {
      this.clientes = res;
    })
  }

  goToInicio() {
    this.router.navigate(['/home'])
  }

  initClienteForm() {
    this.clienteForm = this.fb.group({
      idCliente: [null],
      nombrecliente: [null],
      apellidoPaternoCliente: [null],
      apellidoMaternoCliente: [null],
      dniCliente: [null],
      correoCliente: [null],
      celularCliente: [null],
      direccionCliente: [null],
      estadoCliente: ['A'],
      ubigeo: [null]
    });
    if (this.clienteService.clienteSelected) {
      const cliente = this.clienteService.clienteSelected;
      this.clienteForm.patchValue({
        idCliente: cliente.idCliente,
        nombrecliente: cliente.nombrecliente,
        apellidoPaternoCliente: cliente.apellidoPaternoCliente,
        apellidoMaternoCliente: cliente.apellidoMaternoCliente,
        dniCliente: cliente.dniCliente,
        correoCliente: cliente.correoCliente,
        celularCliente: cliente.celularCliente,
        direccionCliente: cliente.direccionCliente,
        estadoCliente: cliente.estadoCliente,
        ubigeo: cliente.ubigeo?.id,
      })
    }
  }

  save() {
    if(this.clienteService.clienteSelected) {
      this.updateCliente();
    } else {
      this.registerClientes()
    }
  }

  registerClientes() {
    const clientes: ClienteDto = this.clienteForm.value;
    clientes.ubigeo = {
      id: this.clienteForm.controls['ubigeo'].value
    }
    this.clienteService.register(clientes).subscribe(res => {
      this.clienteForm.reset();
      this.ShowMessage(`Registraste a ${res.nombrecliente} como nuevo cliente`);
      this.router.navigate(['../customers']);
    })
  }

  updateCliente() {
    const clientes: ClienteDto = this.clienteForm.value;
    clientes.ubigeo = {
      id: this.clienteForm.controls['ubigeo'].value
    }
    this.clienteService.update(clientes).subscribe(res => {
      this.clienteForm.reset();
      this.ShowMessage(`Actualizar a ${res.nombrecliente} como nuevo cliente`);
      this.router.navigate(['../customers']);
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
