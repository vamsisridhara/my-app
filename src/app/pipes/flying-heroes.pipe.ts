import { Pipe, PipeTransform } from '@angular/core';

// import { Flyer } from './heroes';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: any[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}
