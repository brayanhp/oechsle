import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Models
import { IClient } from '../../models/client.model';

//Services
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-create',
  templateUrl: '../create/create.component.html'
})
export class CreateComponent implements OnInit {

  client: IClient = { id: '', nombre: '', apellido: '', edad: 0, fecha_nacimiento: '' };

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.clientService.addClient(form.value).
      then(() => form.reset());
  }

}
