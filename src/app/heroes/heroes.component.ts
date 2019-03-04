import { Component, OnInit } from '@angular/core';
import { Hero } from './../heroes.model'
import { HEROES } from 'src/app/heroes.mockdata';
import { HeroService } from '../hero.service';
import { MessageService } from 'src/app/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesList: Hero[];
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroesFromService();
  }

  getHeroesFromService(): void {
    this.heroService.getHeroes()
      .subscribe(heroesList => { this.heroesList = heroesList });
  }
}
