import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-bar-chart-widget',
  templateUrl: './bar-chart-widget.component.html',
  styleUrls: ['./bar-chart-widget.component.sass']
})
export class BarChartWidgetComponent implements OnInit {
  @Input() chartvm;
  constructor() { }

  ngOnInit() {
  }

}
