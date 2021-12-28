import { Component, OnInit } from '@angular/core';
import { IClient } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: '../clients/clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: IClient[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((response: IClient[]) => {
      this.clients = response;
    })
  }

  averageAge(): number {
    let sum = 0;
    this.clients.forEach(client => {
      sum += client.edad;
    });
    return sum / this.clients.length;
  }

  deviationStandard(): number {
    let sum = 0;
    this.clients.forEach(client => {
      sum += Math.pow(client.edad - this.averageAge(), 2);
    });
    return Math.sqrt(sum / this.clients.length);
  }

}
