import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/user/auth.service';
import { IUser } from 'app/user/IUser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:eofline
}