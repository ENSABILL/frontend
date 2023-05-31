import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent {
  success=false;
  agent: {
    email: string,
    phoneNumber: string,
    username: string,
    firstName: string,
    lastName: string
  }={
    email: "",
    phoneNumber: "",
    username: "",
    firstName: "",
    lastName: ""
  };

  constructor(public adminService: AdminService, private router: Router){}

  ngOnInit(): void {
    this.adminService.loginSuccess$.subscribe(success => {
      if (success) {
        this.success=true;
      }
    });
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

  toggleSuccess(b: boolean){
    this.success=false;
  }
}
