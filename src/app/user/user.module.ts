import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Userroutes } from 'app/user/user.routing';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Userroutes)
  ],
  declarations: [UserComponent,
    LoginComponent,
    EmployeeComponent
]
})
// tslint:disable-next-line:eofline
export class UserModule { }