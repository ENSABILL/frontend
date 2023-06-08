import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  logout(){
    this.router.navigate(["/"]);
    if(this.localStorageService.getItem("authAgentData")) this.localStorageService.removeItem("authAgentData");
    if(this.localStorageService.getItem("authAdminData")) this.localStorageService.removeItem("authAdminData");
  }
}
