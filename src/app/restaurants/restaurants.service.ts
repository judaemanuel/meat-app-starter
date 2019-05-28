import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Restaurant } from "./restaurant/restaurant.model";

import { MEAT_API } from "app/app.api";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(resp => resp.json());
  }
}