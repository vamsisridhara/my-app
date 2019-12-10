import { NgModule } from '@angular/core';
import { MyappLibComponent } from './myapp-lib.component';
import { BarChartWidgetComponent } from './bar-chart-widget/bar-chart-widget.component';

@NgModule({
  declarations: [MyappLibComponent, BarChartWidgetComponent],
  imports: [
  ],
  exports: [MyappLibComponent]
})
export class MyappLibModule { }
