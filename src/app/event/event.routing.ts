import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from 'app/event/event.component';

export const Eventroutes: Routes = [
  { path: 'eventList', component: EventComponent },
];

export const EventRoutes = RouterModule.forChild(Eventroutes);
