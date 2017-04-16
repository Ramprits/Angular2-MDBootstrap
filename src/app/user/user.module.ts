import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Userroutes } from 'app/user/user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Userroutes)
  ],
  declarations: [UserComponent,
    LoginComponent,
    EmployeeComponent,
    ProfileComponent
  ]
})
// tslint:disable-next-line:eofline
export class UserModule { }