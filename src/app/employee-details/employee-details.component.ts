import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  employeeDetails = []

  ngOnInit() {
    this.employeeDetails = this.employee.getEmployees();
  }

}
