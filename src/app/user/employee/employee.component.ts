import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  AddEmployee(formValues) {
    console.log(formValues);
  }
  cancel() {
    this.router.navigate(['/welcome']);
  }
}