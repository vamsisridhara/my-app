import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProductRoutingModule } from './routing/product-routing/product-routing.module';
import { EmployeeRoutingModule } from './routing/employee-routing/employee-routing.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    EmployeeRoutingModule,
    ProductRoutingModule,
    [
      SweetAlert2Module.forRoot({
        buttonsStyling: false,
        customClass: 'modal-content',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn'
      })
    ]
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
