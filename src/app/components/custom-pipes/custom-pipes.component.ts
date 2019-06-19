import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {
  power = 5;
  factor = 1;
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  heroes: any[] = [];
  canFly = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = { name, canFly: this.canFly };
    this.heroes.push(hero);
  }

  reset() {
    this.heroes = []; // HEROES.slice();
  }

  ngOnInit() {
  }

}
