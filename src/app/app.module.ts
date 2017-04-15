import './rxjs.extension';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Approutes } from 'app/app.routes';
import { ProductService } from 'app/product/product.service';
import { EventService } from 'app/event/event.service';
import { ContactComponent } from 'app/contact/contact.component';
import { AuthService } from 'app/user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [ProductService, EventService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
