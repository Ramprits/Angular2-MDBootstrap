import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Hello World!';
  constructor() { }
  ngOnInit() {
  }
  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}