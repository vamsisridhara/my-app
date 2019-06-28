import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeesPageComponent } from './../../pages/employees-page/employees-page.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeesPageComponent,
    EmployeeComponent
  ]
})
export class EmployeeModule {

}

