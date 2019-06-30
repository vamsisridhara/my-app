import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserMasterComponent } from './unit-testing/user-master/user-master.component';
import { UserComponent } from './unit-testing/user/user.component';
import { UserAsyncComponent } from './unit-testing/user-async/user-async.component';
import { ReversePipe } from './pipes/reverse.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserMasterComponent,
    UserComponent,
    UserAsyncComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    // EmployeeRoutingModule,
    // ProductRoutingModule,
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
