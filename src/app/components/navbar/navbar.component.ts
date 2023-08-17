import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of, startWith, tap } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  pageName!: string;
  subMenuOpen: boolean =false;
  subComponentOpen: boolean =false;
  openSideBare:boolean = false;
  profileDropDown: boolean =  false
  subDataOpen : boolean= false;
  // public isLoading = new BehaviorSubject<Boolean>(false)
  expirationTime = 30 * 60 * 1000; // 30 minutes
  constructor(private route:ActivatedRoute, private router: Router, private authService: AuthServiceService){

  }

  ngOnInit(): void {
    this.pageName=this.router.url;
    this.pageName.substring(1);
    // Lancer un compte à rebours pour supprimer les données après l'expiration
    setTimeout(() => {
      console.log('check');
      // Vérifier si la durée d'expiration est dépassée
      const currentTime = new Date().getTime();
      const storedLoginTime = parseInt(localStorage.getItem('loginTime'));
      console.log(currentTime);
      if (currentTime - storedLoginTime >= this.expirationTime) {
        // Supprimer les données du localStorage
        localStorage.removeItem('loginTime');
        this.authService.logOut
        // Autres opérations de suppression si nécessaire
      }
    }, this.expirationTime);
  }

  showServeurList = () =>{
    this.subMenuOpen = !this.subMenuOpen;
  }

  showDataList = () =>{
    this.subDataOpen = !this.subDataOpen
  }
  showComponentList = () =>{
    this.subComponentOpen = !this.subComponentOpen
  }

  toogleSidebar = () =>{
    this.openSideBare = !this.openSideBare
  }

  showDropDownProfile = () =>{
    this.profileDropDown=!this.profileDropDown;
    console.log(this.profileDropDown);
  }

  logOut=()=>{
    this.authService.logOut()
    // this.router.navigate(['/login']);
  }
}
