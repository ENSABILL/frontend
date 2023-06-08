import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgentService } from 'src/app/services/agent/agent.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  public moveToNext=false;
  public newPassword="";
  public code="";
  constructor(public agentService: AgentService){}
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Perform form submission logic
      this.agentService.verifyOtp(this.code).subscribe(res=>{
        if(res=="the code has been verified successfully")this.moveToNext=true;
        console.log({res});
      });
    }
  }
  resetPassword(form1: NgForm) {
    if (form1.valid) {
      // Perform form submission logic
      this.agentService.resetPassword(this.newPassword).subscribe();
    }
  }

}
