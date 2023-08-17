import {Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, first, map, of, startWith, tap } from 'rxjs';
import { UserState } from '../interface/user-state';
import { AuthResponse } from '../interface/auth-response';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { NotificationService } from '../services/auth/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authState$ : Observable<UserState<AuthResponse>>;
  constructor(private authservice: AuthServiceService, private notifierService: NotificationService, private router: Router){

  }

  ngOnInit(): void {
    console.log(this.authState$)
    this.authState$
  }


  login=(loginForm: NgForm) => {
    console.log(loginForm.value)
    this.authservice.login$(loginForm.value).pipe(first()).subscribe({
      next: (user) =>{
        this.log(user)
        this.notifierService.onSucces('Connexion reussi');
        this.router.navigate(['dashboard'])
      },
      error: (error) =>{
        this.notifierService.onError(error);
        this.handleError(error,[])
        
      }
    })
  }

  private log =(response: any)=>{
    console.table(response);
    return of(response)
  }

  private handleError =(error: Error, errorValue: any)=>{
    console.table(error);
    return of(errorValue);
  }
}
