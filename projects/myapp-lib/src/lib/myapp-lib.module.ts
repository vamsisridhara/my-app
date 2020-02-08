import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyappLibComponent } from './myapp-lib.component';
import { BarChartWidgetComponent } from './bar-chart-widget/bar-chart-widget.component';

@NgModule({
  declarations: [
    MyappLibComponent,
    BarChartWidgetComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    MyappLibComponent,
    BarChartWidgetComponent
  ]
})
export class MyappLibModule { }
