import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/event/event.service';
import { IEvent } from 'app/event/IEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(event => {
      // tslint:disable-next-line:no-trailing-whitespace
      this.events = event;
    });
  }

  // tslint:disable-next-line:eofline
}