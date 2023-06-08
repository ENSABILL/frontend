import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.component.html',
  styleUrls: ['./new-agency.component.css']
})
export class NewAgencyComponent {
  agency: {
    name: string,
    immId: string,
    patentId: string,
    image: string
  }={
      name: "",
      immId: "", // numero d'immatriculation
      patentId: "", // numero de patente
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_inwi.svg" // image link
  };

  constructor(public adminService: AdminService){}
  addAgency(form: NgForm){
    if (form.valid) {
      // Perform form submission logic
      console.log(this.agency);
      this.adminService.addAgency(this.agency).subscribe();
    }else{
      console.log("The form is not valid");
    }
  }
}
