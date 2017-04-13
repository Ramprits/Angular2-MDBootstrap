import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';

export const Approutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product', loadChildren: 'app/product/product.module#ProductModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forChild(Approutes);
