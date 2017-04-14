import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { Eventroutes } from 'app/event/event.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Eventroutes)
  ],
  declarations: [EventComponent]
})
// tslint:disable-next-line:eofline
export class EventModule { }