import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ContactComponent } from 'app/contact/contact.component';
import { CustomersComponent } from 'app/customers/customers.component';
import { EventComponent } from 'app/event/event.component';
import { EventDetailComponent } from 'app/event/event-Detail/event-Detail.component';

export const Approutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product', loadChildren: 'app/product/product.module#ProductModule' },
   { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule' }
];

export const AppRoutes = RouterModule.forChild(Approutes);
