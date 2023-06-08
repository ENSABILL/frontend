import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  constructor(public clientsService: ClientService){}
  ngOnInit() {
    // Call your method here
    this.clientsService.getUnverifiedClients(false).subscribe();
  }

  acceptClient(username: string){
    this.clientsService.acceptClient(username, false).subscribe();
  }
}
