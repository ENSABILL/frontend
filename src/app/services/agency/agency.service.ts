import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';
import basUrl from 'src/config/vars';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  public loading$ = new BehaviorSubject<boolean>(false);
  public agencies$ = new BehaviorSubject<any>([]);
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
  get agencies(): Observable<any> {
    return this.agencies$.asObservable();
  }

  close(){
    this.message$.next('');
  }

  constructor(private localStorageService: LocalStorageService, private http: HttpClient){}

  addService(
    service: {
      type: "DONATION" | "FACTURE" | "RECHARGE",
      products: string[],
      productName: string,
      agencyId: string
    }
  ){
    this.loading$.next(true); // Set loading state to true
    return this.http.post(`${basUrl}/api/v1/agency/${service.agencyId}/service`, { 
      type: service.type, products: service.products 
    },{ 
      headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
    })}).pipe(
      tap((response: any) => {
        this.loading$.next(false);
        this.message$.next("Service has been added successfully");
        this.isError$.next(false);
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

  getAllAgencies(){
    this.loading$.next(true); // Set loading state to true
    return this.http.get(`${basUrl}/api/v1/agency`, { 
      headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
    }) }).pipe(
      tap((response: any) => {
        this.loading$.next(false);
        this.message$.next("Got all agencies successfully");
        this.isError$.next(false);
        this.agencies$.next(response);
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
}
