import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        (data: any[]) => {
          this.employees = data;
        },
        (error: any) => {
          console.error('Error fetching employees:', error);
          // Handle error scenario here
        }
      );
  }

  editEmployee(employeeId: number) {
    // Assuming you have a route for editing an employee with the ID
    this.router.navigate(['/edit-employee', employeeId]);
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId)
      .subscribe(
        () => {
          // After successful deletion, update the employee list by reloading it
          this.loadEmployees();
        },
        (error) => {
          console.error('Error deleting employee:', error);
          // Handle error scenario here
        }
      );
  }
}
