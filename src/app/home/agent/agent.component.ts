import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class User{
  public nom: string='';
  public prenom: string='';
  public dateNaissance: string='';
  public adresse:string='';
  public email:string='';
  public confirmEmail:string='';
  public numTel:string='';
  public numImmatriculation:number=0;
  public numPIdentite:string='';
  public pieceIdentite:string='';
  public numPatente:string='';
  public description:string='';
  public controlFile:string='';
  
}

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
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
