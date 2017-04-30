import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/user/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public userName: string;
  ngOnInit() {
  }
  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/welcome']);
  }
  cancel() { this.router.navigate(['/welcome']); }
  // tslint:disable-next-line:eofline
}