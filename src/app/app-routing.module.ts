import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
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
import { DemoPipesComponent } from './pages/demo-pipes/demo-pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'demo-pipes', component: DemoPipesComponent },
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
    CustomPipesComponent,
    DataBindingComponent,
    EmployeeComponent,
    ProductsComponent,
    HomePageComponent,
    EmployeesPageComponent,
    ProductsPageComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    NotfoundPageComponent,
    DemoPipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe
  ]
})
export class AppRoutingModule {

}
