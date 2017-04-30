import { Component, OnInit, Input } from '@angular/core';
import { ISession } from "app/event/IEvent";

@Component({
    moduleId: module.id,
    selector: 'event-session',
    templateUrl: 'EventSession.component.html'
})
export class EventSessionList implements OnInit {

    constructor() { }
    @Input() sessions: ISession[]
    ngOnInit() {

    }

}