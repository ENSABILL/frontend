import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {
  public user: User= new User();

  constructor(){};

  onSubmit(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeur:', JSON.stringify(registerForm.value));
  }

  annuler() {
    console.log('Annulation effectuée');
    // Ajoutez ici le code pour effectuer l'annulation
  }
}
