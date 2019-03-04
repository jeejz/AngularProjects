import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './heroes.mockdata';
import { Hero } from './heroes.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage("Reaching const for data");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`Selected hero with id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }



}
