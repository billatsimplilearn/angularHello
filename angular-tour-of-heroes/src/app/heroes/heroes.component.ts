import { Component } from '@angular/core';
import { Hero } from '../hero' ;
import { HeroService } from '../hero.service' ;
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes : Hero [ ] = [ ] ;
  private heroService: HeroService ;

  /* auto wiring */
  /* Making this different from Tour of Heroes to make it clearer but
    it means the same thing */
  constructor(heroService: HeroService) {
    this.heroService = heroService ;
  }

  ngOnInit() : void {
    this.populateHeroes();
  }

  // ToH calls this getHeroes():
  populateHeroes() : void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
    });
  }
}
