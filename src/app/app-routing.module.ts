import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/forms/add-student/add-student.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListServerComponent } from './servers/list-server/list-server.component';
import { AuthGuard } from './auth.guard';
import { AddServeurComponent } from './components/forms/add-serveur/add-serveur.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
    children:[
      //serveur
      {
        component:DashboardComponent, path:'dashboard',
      },
      {
        component:StudentComponent, path:'student',
      },
      {
        component:AddStudentComponent, path:'add-student',
      },
      {
        component:PieChartComponent, path:'pie-chart',
      },
      {component:ListServerComponent, path:'server'},
      ], canActivate: [AuthGuard]
  },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**', component:ErrorPageComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
