import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty-view/faculty.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

const routes: Routes = [
  { path: '', component: AdminloginComponent },
  
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'viewstudent', component: ViewstudentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'facultyview', component: FacultyComponent },
  { path: 'addfaculty', component: AddFacultyComponent }
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    AddstudentComponent,
    ViewstudentComponent,
    DashboardComponent,
    FacultyComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
