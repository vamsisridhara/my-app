import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
// import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
// import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { DataBindingComponent } from './forms/data-binding/data-binding.component';
import { MessageComponent } from './components/message/message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { SendRecieveMessageComponent } from './pages/send-recieve-message/send-recieve-message.component';
import { DemoPipesComponent } from './pages/demo-pipes/demo-pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { SampleI18nComponent } from './pages/sample-i18n/sample-i18n.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'employees',
    loadChildren: () => import('./components/employee/employee.module').then(x => x.EmployeeModule)
  },
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'demo-pipes', component: DemoPipesComponent },
  { path: 'send-recieve', component: SendRecieveMessageComponent },
  { path: 'sample-i18n', component: SampleI18nComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundPageComponent }
];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
    // TempRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TempRoutingModule {}
