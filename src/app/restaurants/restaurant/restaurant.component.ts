import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantAnimations } from './restaurant.animations';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [RestaurantAnimations.restaurantAppeared]
})
export class RestaurantComponent implements OnInit {

  restaurantState = 'ready';

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
