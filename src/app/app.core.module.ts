import { NgModule, LOCALE_ID } from '@angular/core';

import { RestaurantsService } from './restaurants/restaurants.service';
import { ShoppingCartService } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from './order/order.service';

 @NgModule ({
    providers: [RestaurantsService, ShoppingCartService, OrderService, { provide: LOCALE_ID, useValue: 'pt-BR' }]
 })
export class AppCoreModule { }
