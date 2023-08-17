import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/student/student.component';
import { AddStudentComponent } from './components/forms/add-student/add-student.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OverviewChartComponent } from './components/overview-chart/overview-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListServerComponent } from './servers/list-server/list-server.component';
import { DataTablesModule } from 'angular-datatables';
import {NotificationModule} from './notification.module';
import { AddServerComponent } from './components/popup/add-server/add-server.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { UpdateServerComponent } from './components/popup/update-server/update-server.component';
import { AddServeurComponent } from './components/forms/add-serveur/add-serveur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    StudentComponent,
    OverviewChartComponent,
    AddStudentComponent,
    PieChartComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    ListServerComponent,
    AddServerComponent,
    UpdateServerComponent,
    AddServeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    NgbModule,
    DataTablesModule,
    NotificationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
