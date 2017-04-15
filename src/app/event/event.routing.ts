import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from 'app/event/event.component';
import { EventDetailComponent } from 'app/event/event-Detail/event-Detail.component';

export const Eventroutes: Routes = [
  { path: 'eventList', component: EventComponent },
  { path: 'eventList/:id', component: EventDetailComponent }
];

export const EventRoutes = RouterModule.forChild(Eventroutes);
