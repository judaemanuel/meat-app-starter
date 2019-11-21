import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  animations: [
    trigger('restaurant-detail-appeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
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
