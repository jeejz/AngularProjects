import { Component, OnInit } from '@angular/core';
import { Hero } from './../heroes.model'
import { HEROES } from 'src/app/heroes.mockdata';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesList = HEROES;
  selectedHero: Hero;

  onselecthero(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
