import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp:EmployeeService){}
  title = 'ServicesDemo';
  addEmp() {
    let id = Number(prompt("Enter ID"));
    let name = prompt("Enter Name");
    let dept = prompt("Enter Dept");
    //Return When no id or name or dept
    if(!id || !name || !dept)
      return;
    this.emp.setEmployees(id,name,dept);
  }
}
