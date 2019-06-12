import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { DataBindingComponent } from './forms/data-binding/data-binding.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    DataBindingComponent,
    EmployeeComponent,
    ProductsComponent,
    HomePageComponent,
    EmployeesPageComponent,
    ProductsPageComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    NotfoundPageComponent,
  ]
})
export class AppRoutingModule {

}
