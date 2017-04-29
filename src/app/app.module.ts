import './rxjs.extension';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CustomersComponent } from "app/customers/customers.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    ContactComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DateInputsModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [ProductService, EventService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
