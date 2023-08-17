import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, delay, tap, throwError } from 'rxjs';
import { AuthResponse } from 'src/app/interface/auth-response';
import { User } from 'src/app/interface/user';
import { UserAuth } from 'src/app/interface/user-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly apiUrl = 'http://localhost:8081/api/v1';

  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  private userSubject!: BehaviorSubject<User | null>;
  public user!: Observable<User | null>;
  
  constructor(private http:HttpClient, private router: Router) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user=this.userSubject.asObservable();
  }

  //login

  public get userValue() {
    return this.userSubject.value;
  }
  
  // login = (user: UserAuth): Observable<User> =>{
  //   const httpOptions ={
  //     headers: new HttpHeaders({'Access-Control-Allow-Methods':'POST,OPTIONS'})
  //   };
  //   return this.http.post<User>('http://localhost:8081/api/v1', user, httpOptions).pipe(
  //     delay(1000),
  //     tap(user => {
  //       localStorage.setItem("user", JSON.stringify(user));
  //       localStorage.setItem("token", JSON.stringify(user['token']));
  //       this.userSubject.next(user);
  //       // this.isLoggedIn.next(true)
  //       return user;
  //     })
  //   );
  // }

  login$=(user: UserAuth) =>  <Observable<AuthResponse>>this.http.post<AuthResponse>(`${this.apiUrl}/auth/authenticate`, user , httpOptions).pipe(
    tap(user => {
        localStorage.setItem('loginTime', loginTime.toString());
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(user['token']));
        this.userSubject.next(user.user);
        this.isLoggedIn$.next(true)
        return user.user;
      }
    ),
    catchError(this.handleError)
  )
  
  register$ = (user: User) => <Observable<AuthResponse>>this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, user).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  logOut = () =>{
    delay(1000),
    localStorage.removeItem('loginTime');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  private handleError(error:HttpErrorResponse):Observable<never>{
    console.log(error.error.message);
    return throwError(() => `Error : ${error.error.message}`);
  }

  
}

const httpOptions ={
  headers: new HttpHeaders({'Access-Control-Allow-Methods':'POST,OPTIONS'})
};

const loginTime = new Date().getTime();