import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h1>{{ title }}</h1>
  `,
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = 'Hello';
  constructor() { }

  ngOnInit() {
  }

}
