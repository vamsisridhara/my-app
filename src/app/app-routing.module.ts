import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
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
// import * as appRoutes from './routes';
import { TempRoutingModule } from './routes';
// module code goes here
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TempRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    CustomPipesComponent,
    DataBindingComponent,
    // EmployeeComponent,
    ProductsComponent,
    HomePageComponent,
    // EmployeesPageComponent,
    ProductsPageComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    NotfoundPageComponent,
    DemoPipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    MessageComponent,
    ReceiveMessageComponent,
    SendRecieveMessageComponent,
    SampleI18nComponent,
    QuotesComponent
  ]
})
export class AppRoutingModule {

}
