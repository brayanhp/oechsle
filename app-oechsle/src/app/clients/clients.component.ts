import { Component, OnInit } from '@angular/core';
import { IClient } from '../models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
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

}
