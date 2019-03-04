import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { HEROES } from './heroes.mockdata';
import { Hero } from './heroes.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.addMessage(`Hero Service : ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    this.log("Reaching http for data");
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`Selected hero with id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }



}
