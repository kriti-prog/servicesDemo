import { Injectable } from "@angular/core";

@Injectable()
    export class EmployeeService{
        employees = [
            {id: 1, name: "Arnab", dept: "CSE"},
            {id: 2, name: "Deepro", dept: "ECE"},
            {id: 3, name: "Dutta", dept: "IT"}
        ]
        getEmployees(){
            return this.employees;
        }

        setEmployees(id,name,dept){
            let obj = {
                id: id,
                name: name,
                dept: dept
            }
            this.employees.push(obj);
        }
    }