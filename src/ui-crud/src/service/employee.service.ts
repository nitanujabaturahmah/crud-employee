import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  api = "http://192.168.238.141:8080"

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save/employee`, employee);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/get/employee`);
  }

  public deleteEmployee(employeeId: number) {
    return this.httpClient.delete(`${this.api}/delete/employee/${employeeId}`);
  }

  public getEmployee(employeeId: number) {
    return this.httpClient.get<Employee>(`${this.api}/get/employee/${employeeId}`);
  }

  public updateEmployee(employee: Employee) {
    return this.httpClient.put<Employee>(`${this.api}/update/employee`, employee);
  }
}
