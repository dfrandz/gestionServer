import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { BehaviorSubject, Observable , startWith,catchError,of,map} from 'rxjs';
import { UserState } from '../interface/user-state';
import { AuthResponse } from '../interface/auth-response';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  userState$: Observable<UserState<AuthResponse>>
  private dataSubject= new BehaviorSubject<AuthResponse>(null)


  constructor(private authService: AuthServiceService){}


}
