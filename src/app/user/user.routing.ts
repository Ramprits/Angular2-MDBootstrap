import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/user/login/login.component';
import { EmployeeComponent } from 'app/user/employee/employee.component';
import { ProfileComponent } from 'app/user/profile/profile.component';

export const Userroutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'profile', component: ProfileComponent }
];

export const UserRoutes = RouterModule.forChild(Userroutes);
