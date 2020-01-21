import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } rom 'rxjs';
import { EmployeeService } from '../../api/employee-service.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit, OnDestroy {
  employees;
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees()
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(result => {
        if (result) {
          this.employees = result['data'];
        }
      });
  }
  catchEvent(employee) {
    console.log(JSON.stringify(employee));
  }
  ngOnDestroy() {
  }

}
