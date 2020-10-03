import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Review } from './review/review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review[]>;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }
}
