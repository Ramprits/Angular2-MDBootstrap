import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/event/event.service';
import { IEvent } from 'app/event/IEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    eventList: IEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventList = this.eventService.getEvents();
  }

  // tslint:disable-next-line:eofline
}