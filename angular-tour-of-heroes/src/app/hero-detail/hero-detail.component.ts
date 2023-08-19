import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero ?: Hero ;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.populateHero();
  }

  // ToH will call this "getHero"
  populateHero() : void {
    const id : number = Number(this.route.snapshot.paramMap.get('id')) ;
    this.heroService.getHero(id).subscribe((h) => this.hero = h) ;
  }

  goBack() : void {
    this.location.back ( ) ;
  }
}
