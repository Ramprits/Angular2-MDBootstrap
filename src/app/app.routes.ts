import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ContactComponent } from 'app/contact/contact.component';

export const Approutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product', loadChildren: 'app/product/product.module#ProductModule' },
  { path: 'event', loadChildren: 'app/event/event.module#EventModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule' }
];

export const AppRoutes = RouterModule.forChild(Approutes);
