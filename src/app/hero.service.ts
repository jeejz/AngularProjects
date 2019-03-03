import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './heroes.mockdata';
import { Hero } from './heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}
