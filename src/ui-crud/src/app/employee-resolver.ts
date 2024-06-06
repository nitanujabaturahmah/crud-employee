import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {EmployeeService} from "./service/employee.service";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";
import {Employee} from "./model/employee.model";

export const EmployeeResolver: ResolveFn<any> =
  (route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot,
   employeeService: EmployeeService = inject(EmployeeService)) :Observable<Employee> => {

  const employeeId = route.paramMap.get("employeeId");

  if (employeeId) {
    // membuat panggilan api dan mendapatkan data untuk id karyawan yang diberikan
    return employeeService.getEmployee(Number(employeeId));
  } else {
    // membuat dan mengembalikan detail karyawan yang kosong

    const employee: Employee = {
      employeeId: 0,
      employeeName: '',
      employeeContactNumber: '',
      employeeAddress: '',
      employeeGender: '',
      employeeDepartment: '',
      employeeSkills: ''
    }

    return of(employee);
  }
}
