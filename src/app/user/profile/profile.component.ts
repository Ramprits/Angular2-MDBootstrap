import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/user/auth.service';
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName);
    const lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }
  SaveProfile(formValues) {
    console.log(formValues);
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['/welcome']);
  }
  cancelProfile() { this.router.navigate(['/welcome']); }
  // tslint:disable-next-line:eofline
}