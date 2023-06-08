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
    email: "j0w@gmail.com",
    dob: "2001/28/09",
    cin: "e11905333",
    firstName: "clw432ient01",
    lastName: "2209",
    phoneNumber: "212612218950",
    username: "cl90ent234"
  };

  constructor(public clientService: ClientService){};

  onSubmit(registerForm: NgForm) {
    if(registerForm.valid){
      this.clientService.addClient(this.user, true).subscribe();
    }else{
      console.log("Form is not valid");
    }
  }

  annuler() {
    console.log('Annulation effectuée');
    // Ajoutez ici le code pour effectuer l'annulation
  }
}
