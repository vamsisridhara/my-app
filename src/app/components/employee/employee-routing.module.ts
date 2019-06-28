import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesPageComponent } from 'src/app/pages/employees-page/employees-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPageComponent,
    canActivateChild: []
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {

}
