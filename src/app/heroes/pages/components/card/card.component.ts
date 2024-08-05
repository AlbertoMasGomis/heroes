import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Hero;

  constructor() {}

  ngOnInit() {
  }
}
