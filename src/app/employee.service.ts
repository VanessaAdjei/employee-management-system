import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/employees'; 

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${employeeId}`);
  }

  addEmployee(newEmployee: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, newEmployee);
  }
  updateEmployee(updatedEmployee: any): Observable<any> {
    const updateUrl = `${this.baseUrl}/${updatedEmployee.id}`; 
    return this.http.put<any>(updateUrl, updatedEmployee);
  }
  getEmployeeById(employeeId: number): Observable<any> {
    const url = `${this.baseUrl}/${employeeId}`; 
    return this.http.get<any>(url);
  }

}
