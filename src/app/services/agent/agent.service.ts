import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';
import basUrl from 'src/config/vars';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  public loading$ = new BehaviorSubject<boolean>(false);
  public message$ = new BehaviorSubject<string>('');
  isError$ = new BehaviorSubject<boolean>(false);

  get loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  get message(): Observable<string> {
    return this.message$.asObservable();
  }

  get isError(): Observable<boolean> {
    return this.isError$.asObservable();
  }

  close(){
    this.message$.next('');
  }

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.localStorageService.getItem("authAgentData")?.token}`
  });

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService, private router: Router) { }

  //this will a 4 digit number to your phone number
  getOtp(){
    this.loading$.next(true); // Set loading state to true
    return this.http.post(`${basUrl}/api/v1/auth/get-otp`, null, { headers: this.headers, responseType: "text" }).pipe(
      tap((response: string) => {
        this.loading$.next(false); // Set loading state to false
        this.message$.next("We sent a 4 digit number to your phone");
        this.isError$.next(false); // Emit login success event  
        this.localStorageService.setItem("token", response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        if (error.status === 201) this.message$.next("Otp has been sent please check your phone");
        else {
          this.isError$.next(true); 
          this.message$.next("Whoops something went wrong");
        }
        return throwError(error);
      })
    );
  }

  //You enter the opt to verify it
  verifyOtp(code: string){
    this.loading$.next(true); // Set loading state to true
    return this.http.post(`${basUrl}/api/v1/auth/verify-otp`, {
      code, token: this.localStorageService.getItem("token")
    }, { headers: this.headers, responseType: "text" }).pipe(
      tap((response: string) => {
        this.loading$.next(false); // Set loading state to false
        this.message$.next("Code has been verified successfully");
        this.isError$.next(false); // Emit login success event  
        // this.localStorageService.setItem("token", response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.message$.next("Whoops something went wrong");
        this.isError$.next(true); // Emit login success event  
        return throwError(error);
      })
    );
  }

  //And then you can change the password
  resetPassword(newPassword: string){
    this.loading$.next(true); // Set loading state to true
    return this.http.post(`${basUrl}/api/v1/auth/reset-password`, {
      newPassword, token: this.localStorageService.getItem("token")
    }, { headers: this.headers, responseType: "text" }).pipe(
      tap((response: any) => {
        this.loading$.next(false); // Set loading state to false
        this.message$.next("Password has been changed successfully");
        this.isError$.next(false); // Emit login success event  
        // this.token$.next(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.message$.next("Whoops something went wrong");
        this.isError$.next(true); // Emit login success event  
        return throwError(error);
      })
    );
  }
}
