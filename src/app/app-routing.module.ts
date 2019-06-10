import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    EmployeeComponent,
    ProductsComponent,
    HomePageComponent,
    EmployeesPageComponent,
    ProductsPageComponent,
    NotfoundPageComponent,
  ]
})
export class AppRoutingModule {

}
