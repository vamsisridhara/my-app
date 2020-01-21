import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeesPageComponent } from './../../pages/employees-page/employees-page.component';
import { MyappLibModule } from 'projects/myapp-lib/src/public-api';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MyappLibModule
  ],
  exports: [
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyappLibModule
  ],
  declarations: [
    EmployeesPageComponent,
    EmployeeComponent
  ]
})
export class EmployeeModule {

}

