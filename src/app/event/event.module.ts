import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { Eventroutes } from 'app/event/event.routing';
import { EventDetailComponent } from './event-Detail/event-Detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Eventroutes)
  ],
  declarations: [EventComponent,
    EventDetailComponent
]
})
// tslint:disable-next-line:eofline
export class EventModule { }