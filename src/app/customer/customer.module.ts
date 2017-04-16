import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { Customerroutes } from 'app/customer/customer.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(Customerroutes)
  ],
  declarations: [CustomerComponent]
})
// tslint:disable-next-line:eofline
export class CustomerModule { }