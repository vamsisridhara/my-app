import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../api/employee-service.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit , OnDestroy {
  employee$: Subscription;
  employees;
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    if (this.employee$) {
      this.employee$.unsubscribe();
    }
    this.employee$ = this.employeeService.getEmployees().subscribe(result => {
      if (result) {
        this.employees = result;
      }
    });
  }
  ngOnDestroy() {
    if (this.employee$) {
      this.employee$.unsubscribe();
    }
  }

}
