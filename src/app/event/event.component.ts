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
  public Show: boolean = true;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.Show = true;
    this.eventService.getEvents().subscribe(events => {
      // tslint:disable-next-line:no-trailing-whitespace
      this.events = events;
    });
     this.Show = false;
  }

  // tslint:disable-next-line:eofline
}