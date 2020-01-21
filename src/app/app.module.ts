import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserMasterComponent } from './unit-testing/user-master/user-master.component';
import { UserAsyncComponent } from './unit-testing/user-async/user-async.component';
import { UserComponent } from './unit-testing/user/user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MatCardModule } from '@angular/material/card';
// import { MyappLibModule } from 'projects/myapp-lib/src/public-api';
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
    BrowserAnimationsModule,
    MatCardModule,
    // MyappLibModule,
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
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [

  ]
})
export class AppModule { }
