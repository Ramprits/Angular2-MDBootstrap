import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/event/event.service';
import { IEvent } from 'app/event/IEvent';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-event-Detail',
  templateUrl: './event-Detail.component.html',
  styleUrls: ['./event-Detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEvent;

  constructor(private eventService: EventService,
    private router: ActivatedRoute, private route: Router
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.router.snapshot.params['id']);
  }

  onButtonClick() {
    window.confirm('Are you sure want to go there !');
    this.route.navigate(['/events']);
  }
  // tslint:disable-next-line:eofline
}