import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from 'app/customer/customer.component';

export const Customerroutes: Routes = [
  { path: 'customerList', component: CustomerComponent },
];

export const CustomerRoutes = RouterModule.forChild(Customerroutes);
