import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';

import { Restaurant } from './restaurant/restaurant.model';
import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { Review } from './restaurant-detail/reviews/review/review.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${environment.api}/restaurants`, { params: { q: search } })
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${environment.api}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<Review[]> {
    return this.http.get(`${environment.api}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${environment.api}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
