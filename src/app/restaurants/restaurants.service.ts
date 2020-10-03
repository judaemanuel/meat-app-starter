import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { Review } from './restaurant-detail/reviews/review/review.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;

    if (search) {
      params = new HttpParams()
        .set('q', search);
    }

    return this.http.get<Restaurant[]>(`${environment.api}/restaurants`, { params: params });
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${environment.api}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.api}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${environment.api}/restaurants/${id}/menu`);
  }
}
