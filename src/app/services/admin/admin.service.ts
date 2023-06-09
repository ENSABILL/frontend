import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';
import basUrl from 'src/config/vars';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private loading$ = new BehaviorSubject<boolean>(false);
  private errorMessage$ = new BehaviorSubject<string>('');

  loginSuccess$ = new BehaviorSubject<boolean>(false);
  loginAs$ = new BehaviorSubject<"Admin" | "Agent" | "Client">("Agent");
  isError$ = new BehaviorSubject<boolean>(false);
  headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
  });

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private router: Router) { }

  get loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  get errorMessage(): Observable<string> {
    return this.errorMessage$.asObservable();
  }

  get isError(): Observable<boolean> {
    return this.isError$.asObservable();
  }

  get loginAs(): Observable<"Admin" | "Agent" | "Client"> {
    return this.loginAs$.asObservable();
  }

  get loginSuccess(): Observable<boolean> {
    return this.loginSuccess$.asObservable();
  }

  close(){
    this.errorMessage$.next("");
  }

  closeSuccess(b: boolean){
    this.loginSuccess$.next(false);
  }
  unsetError(b: boolean){
    this.isError$.next(false); 
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    this.loading$.next(true); // Set loading state to true

    return this.http.post(`${basUrl}/api/v1/auth/login`, body).pipe(
      tap((response: any) => {
        this.loading$.next(false); // Set loading state to false
        this.loginSuccess$.next(true); // Emit login success event
        this.isError$.next(false); // Emit login success event
        if (response.userType==="Agent") {
          this.loginAs$.next("Admin");
          this.localStorageService.setItem("authAgentData", response);
          if(!response.firstLogin) this.router.navigate(['/home', 'agent', 'agentHome']);
          else this.router.navigate(['/home', 'agent', 'changePassword']);
        }else{
          this.router.navigate(['/home', 'backOffice', '']);
          this.localStorageService.setItem("authAdminData", response);
        }
        
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.errorMessage$.next("Either the username or password is wrong!"); // Set error message
        this.isError$.next(true);
        return throwError(error);
      })
    );
  }

  addAgent(agent: {
    email: string,
    phoneNumber: string,
    username: string,
    firstName: string,
    lastName: string,
    agencyImmId: string
  }): Observable<any> {
    this.loading$.next(true); // Set loading state to true
    console.log({token: this.localStorageService.getItem("authAdminData")?.token});
    return this.http.post(`${basUrl}/api/v1/agent`, agent, { headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
    }) }).pipe(
      tap((response) => {
        this.loading$.next(false); 
        this.loginSuccess$.next(true); 
        this.isError$.next(false); 
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); 
        this.isError$.next(true); 
        this.errorMessage$.next(error.message);
        return throwError(error);
      })
    );
  }

  addAgency(agency: {
    name: string,
    immId: string, // numero d'immatriculation
    patentId: string, // numero de patente
    image: string
  }): Observable<any> {
    this.loading$.next(true); // Set loading state to true

    return this.http.post(`${basUrl}/api/v1/agency`, agency, { headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
    })}).pipe(
      tap((response) => {
        this.loading$.next(false); 
        this.loginSuccess$.next(true); 
        this.isError$.next(false); 
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); 
        this.isError$.next(true); 
        this.errorMessage$.next(error.message);
        return throwError(error);
      })
    );
  }
}
