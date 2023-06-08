import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public adminService: AdminService){}

  user: {username: string, password: string} = { username: "", password: "" };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Perform form submission logic
      console.log(this.user);
      this.adminService.login(this.user.username, this.user.password).subscribe();
    }
  }

}
