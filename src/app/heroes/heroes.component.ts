import { Component, OnInit } from '@angular/core';
import { Hero } from './../heroes.model'
import { HEROES } from 'src/app/heroes.mockdata';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesList: Hero[];
  selectedHero: Hero;

  onselecthero(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroesFromService();
  }

  getHeroesFromService(): void {
    this.heroService.getHeroes()
      .subscribe(heroesList => { this.heroesList = heroesList });
    //  this.heroesList = this.heroService.getHeroes();
  }
}
