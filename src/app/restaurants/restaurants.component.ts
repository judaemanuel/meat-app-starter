import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { RestaurantAnimations } from './restaurant/restaurant.animations';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [RestaurantAnimations.toggleSearchRestaurants]
})
export class RestaurantsComponent implements OnInit {

  searchbarState = 'hidden';
  restaurants: Restaurant[];
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantsService: RestaurantsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.restaurantsService
          .restaurants(searchTerm)
          .catch(() => Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    this.searchbarState = this.searchbarState === 'hidden' ? 'visible' : 'hidden';
  }

}
