import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/user/login/login.component';
import { EmployeeComponent } from 'app/user/employee/employee.component';

export const Userroutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent }
];

export const UserRoutes = RouterModule.forChild(Userroutes);
