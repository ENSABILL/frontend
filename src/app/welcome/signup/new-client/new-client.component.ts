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
      this.clientService.sentRequest(this.user).subscribe();
    }else{
      console.log("Form is not valid");
    }
  }

  annuler() {
    console.log('Annulation effectuée');
    // Ajoutez ici le code pour effectuer l'annulation
  }
}
