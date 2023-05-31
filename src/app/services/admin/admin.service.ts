import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private createAgentEndpoint = 'http://localhost:8081/api/v1/agent';
  private adminLoginEndpoint = 'http://localhost:8081/api/v1/auth/login'; // Replace with your actual API URL

  private loading$ = new BehaviorSubject<boolean>(false);
  private errorMessage$ = new BehaviorSubject<string>('');

  loginSuccess$ = new BehaviorSubject<boolean>(false);
  headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    Authorization: `Bearer ${this.localStorageService.getItem("authAdminData")?.token}`
  });

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  get loading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  get errorMessage(): Observable<string> {
    return this.errorMessage$.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    this.loading$.next(true); // Set loading state to true

    return this.http.post(this.adminLoginEndpoint, body).pipe(
      tap((response) => {
        this.loading$.next(false); // Set loading state to false
        this.loginSuccess$.next(true); // Emit login success event
        this.localStorageService.setItem("authAdminData", response);
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.errorMessage$.next(error.message); // Set error message
        return throwError(error);
      })
    );
  }

  addAgent(agent: {
    email: string,
    phoneNumber: string,
    username: string,
    firstName: string,
    lastName: string
  }): Observable<any> {
    this.loading$.next(true); // Set loading state to true

    return this.http.post(this.createAgentEndpoint, agent, { headers: this.headers }).pipe(
      tap((response) => {
        this.loading$.next(false); // Set loading state to false
        this.loginSuccess$.next(true); // Emit login success event
        console.log(response);
      }),
      catchError((error) => {
        this.loading$.next(false); // Set loading state to false
        this.errorMessage$.next(error.message); // Set error message
        return throwError(error);
      })
    );
  }
}
