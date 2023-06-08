import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';
import basUrl from 'src/config/vars';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public loading$ = new BehaviorSubject<boolean>(false);
  public unverifiedClients$ = new BehaviorSubject<Array<{ username: string, 
    email: string, phoneNumber: string, cin: string }>>([]);
  public message$ = new BehaviorSubject<string>('');
  public token$ = new BehaviorSubject<string>('');
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

  get unverifiedClients(): Observable<Array<{ username: string, 
    email: string, phoneNumber: string, cin: string }>>{
      return this.unverifiedClients$.asObservable();
  }

  close(){
    this.message$.next('');
  }

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
  });

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService, private router: Router) { }

  //this will a 4 digit number to your phone number
  getUnverifiedClients(acceptedByAgent: boolean){
    this.loading$.next(true); // Set loading state to true
    return this.http.get(`${basUrl}/api/v1/client/nonVerifiedClients`, { 
      headers: new HttpHeaders({
      Authorization: `Bearer ${!acceptedByAgent ? 
        this.localStorageService.getItem("authAdminData")?.token : this.localStorageService.getItem("authAgentData")?.token}`
    })}).pipe(
      tap((response: any) => {
        this.loading$.next(false); // Set loading state to false
        this.message$.next("");
        this.unverifiedClients$.next(response);
        this.isError$.next(false); // Emit login success event  
        this.token$.next(response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.isError$.next(true); 
        this.message$.next("Whoops we could not get the data");
        return throwError(error);
      })
    );
  }

  acceptClient(username: string, acceptedByAgent: boolean){
    this.loading$.next(true); // Set loading state to true
    return this.http.put(`${basUrl}/api/v1/client/${username}/verify`, null,{ 
      headers: new HttpHeaders({
        Authorization: `Bearer ${!acceptedByAgent ? 
          this.localStorageService.getItem("authAdminData")?.token : this.localStorageService.getItem("authAgentData")?.token}`
      }), responseType: "text" }).pipe(
      tap((response: any) => {
        this.loading$.next(false);
        this.message$.next("");
        this.unverifiedClients$.next(this.unverifiedClients$.getValue().filter(p=>p.username!=username));
        this.isError$.next(false); // Emit login success event  
        this.token$.next(response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.isError$.next(true); 
        this.message$.next("Whoops we could not get the data");
        return throwError(error);
      })
    );
  }

  addClient(
    user: { email: string, dob: string, cin: string, firstName: string, lastName: string, phoneNumber: string, username: string },
    isAddedByAgent: boolean
  ){
    this.loading$.next(true); // Set loading state to true
    return this.http.post(`${basUrl}/api/v1/client/add-account`, user,{ 
      headers: new HttpHeaders({
      Authorization: `Bearer ${!isAddedByAgent ? this.localStorageService.getItem("authAdminData")?.token : this.localStorageService.getItem("authAgentData")?.token}`
    }), responseType: "text" }).pipe(
      tap((response: any) => {
        this.loading$.next(false);
        this.message$.next("Client has been added successfully");
        this.isError$.next(false);
        this.token$.next(response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.isError$.next(true); 
        this.message$.next("Whoops we could not add this client, review the fields");
        return throwError(error);
      })
    );
  }

  sentRequest(
    user: { email: string, dob: string, cin: string, firstName: string, lastName: string, phoneNumber: string, username: string },
  ){
    this.loading$.next(true); // Set loading state to true
    return this.http.post(`${basUrl}/api/v1/client/signup`, user,{ responseType: "text" }).pipe(
      tap((response: any) => {
        this.loading$.next(false);
        this.message$.next("Your request has been sent to admin successfully, you will get an SMS when the admin accepts you, sit tight!;)");
        this.isError$.next(false);
        this.token$.next(response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.isError$.next(true); 
        this.message$.next("Whoops we could not sent your request, review the fields");
        return throwError(error);
      })
    );
  }
}
