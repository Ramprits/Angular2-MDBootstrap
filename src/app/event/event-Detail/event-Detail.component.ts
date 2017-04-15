import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/event/event.service';
import { IEvent } from 'app/event/IEvent';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-event-Detail',
  templateUrl: './event-Detail.component.html',
  styleUrls: ['./event-Detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventDetail: IEvent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventDetail = this.eventService.getEvent(1);
  }

  // tslint:disable-next-line:eofline
}