import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant/restaurant.model';
import { RestaurantAnimations } from '../restaurant/restaurant.animations';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  animations: [RestaurantAnimations.restaurantDetailAppeared]
})
export class RestaurantDetailComponent implements OnInit {

  restaurantDetailState = 'ready';

  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.router.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }
}
