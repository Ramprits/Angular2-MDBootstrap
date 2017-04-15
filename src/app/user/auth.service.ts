import { Injectable } from '@angular/core';
import { IUser } from 'app/user/IUser';

@Injectable()
export class AuthService {
     constructor() { }
     // tslint:disable-next-line:member-ordering
     currentUser: IUser;
     loginUser(userName: string, password: string) {
          this.currentUser = {
               id: 1,
               userName: userName,
               firstName: 'John',
               lastName: 'Papa'
          // tslint:disable-next-line:semicolon
          }
     }

     isAuthenticated() {
          return !!this.currentUser;
     }
     updateCurrentUser(firstName: string, lastName: string) {
          this.currentUser.firstName = firstName;
          this.currentUser.lastName = lastName;
     }
     // tslint:disable-next-line:eofline
}