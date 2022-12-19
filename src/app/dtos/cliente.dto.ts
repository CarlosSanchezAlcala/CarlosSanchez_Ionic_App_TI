export class ClienteDto {
idCliente: number = 0;
nombrecliente: string = '';
apellidoPaternoCliente: string = '';
apellidoMaternoCliente: string = '';
dniCliente: string = '';
correoCliente: string = '';
celularCliente: string = '';
direccionCliente: string = '';
estadoCliente: string = '';
ubigeo: Ubigeo | undefined;
}

export class Ubigeo {
  id: string = '';
  departamento?: string = '';
  provincia?: string = '';
  distrito?: string = '';
}
