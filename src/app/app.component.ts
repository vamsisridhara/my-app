import {
  Component, OnInit, OnChanges,
  OnDestroy, DoCheck, AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';
import filter from 'lodash/filter';
import { remove } from 'lodash';
// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewChecked,
  DoCheck, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked {
  data;
  constructor() {
    console.log('constructor');
    const array = [1, 2, 3, 4];
    const evens = remove(array, (n) => {
      return n % 2 === 0;
    });

    console.log(array);
    // => [1, 3]

    console.log(evens);
    // => [2, 4]
  }
  ngOnInit(): void {
    console.log('ng oninit');
    const users = [
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false }
    ];
    // tslint:disable-next-line:only-arrow-functions
    console.log(filter(users, function (o) { return !o.active; }));
  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
