import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { EmployeeRoutingModule } from './routing/employee-routing/employee-routing.module';
import { from } from 'rxjs';
// import { ProductRoutingModule } from './routing/product-routing/product-routing.module';

import { ProductRoutingModule } from './routing/product-routing/product-routing.module';
import { EmployeeRoutingModule } from './routing/employee-routing/employee-routing.module';
// import { DataBindingComponent } from './forms/data-binding/data-binding.component';
// import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    // DataBindingComponent,
    // ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    EmployeeRoutingModule,
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
