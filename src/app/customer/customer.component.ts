import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/customer/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
public customer = new Customer();
  constructor() { }

  ngOnInit() {
  }

}