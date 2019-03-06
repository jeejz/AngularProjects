import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HEROES } from './heroes.mockdata';
import { Hero } from './heroes.model';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    this.log("Reaching http for data " + this.http.get(this.heroesUrl));
    return this.http.get<Hero[]>(this.heroesUrl).
      pipe(tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    this.log(`Selected hero with id = ${id}`);
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetching id ${id}`),
        catchError(this.handleError<Hero>(`getHero id=${id}`)))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} : error : ${error}`);
      return of(result as T);
    };
  }

  updateHero(hero: Hero): Observable<any> {
    this.log(`Updated the ${hero.name} with id: ${hero.id}`);
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`Updated id: ${hero.id}`)),
      catchError(this.handleError<any>(`updatehero(${this.heroesUrl})`))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Adding new hero : ${newHero.name}`)),
      catchError(this.handleError<Hero>('addHero()'))
    );
  }

}
