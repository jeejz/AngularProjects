import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/heroes.model';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Hero1' },
      { id: 2, name: 'Hero2' },
      { id: 3, name: 'Hero3' },
      { id: 4, name: 'Hero4' },
      { id: 5, name: 'Hero5' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;

  }

  constructor() { }
}
