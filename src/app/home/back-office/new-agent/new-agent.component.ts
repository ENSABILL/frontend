import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AgencyService } from 'src/app/services/agency/agency.service';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit{
  agent: {
    email: string,
    phoneNumber: string,
    username: string,
    firstName: string,
    lastName: string,
    agencyImmId: string
  }={
    email: "",
    phoneNumber: "",
    username: "",
    firstName: "",
    lastName: "",
    agencyImmId: ""
  };

  constructor(public adminService: AdminService, public agencyService: AgencyService){}
  ngOnInit(): void {
    this.agencyService.getAllAgencies().subscribe();
  }

  addAgent(form: NgForm){
    if (form.valid) {
      // Perform form submission logic
      console.log(this.agent);
      this.adminService.addAgent(this.agent).subscribe();
    }else{
      console.log("The form is not valid");
    }
  }
}
