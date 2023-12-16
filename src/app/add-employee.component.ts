import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee = {
    name: '',
    department: ''
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee)
      .subscribe((data: any) => {
      
      });
  }
}
