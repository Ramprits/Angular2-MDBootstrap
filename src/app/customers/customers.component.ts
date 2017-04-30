import { Component, OnInit } from '@angular/core';
import { customers } from "app/customers/customers";

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {

    constructor() { }
    public gridData: any[] = customers;
    ngOnInit() {

    }

}