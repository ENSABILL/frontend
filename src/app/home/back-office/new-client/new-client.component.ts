import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {
  public user={
    email: "",
    dob: "",
    cin: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: ""
  };

  constructor(public clientService: ClientService){};

  onSubmit(registerForm: NgForm) {
    if(registerForm.valid){
      this.clientService.addClient(this.user, false).subscribe();
    }else{
      console.log("Form is not valid");
    }
  }
}
