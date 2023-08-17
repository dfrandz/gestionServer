import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from './services/auth/notification/notification.service';
import { AuthServiceService } from './services/auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  pageName!: string;

  constructor(private route:ActivatedRoute, private router: Router, private notifierService: NotificationService, private authService: AuthServiceService){
  }

  ngOnInit(): void {
    this.pageName=this.router.url;
    this.pageName.substring(1);
    
  }
}
