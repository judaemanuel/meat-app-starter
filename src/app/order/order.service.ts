import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';

import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';
import { Order } from './order.model';

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: Http
    ) { }

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): ShoppingCartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: ShoppingCartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: ShoppingCartItem) {
        this.cartService.decreaseQty(item);
    }

    removeItem(item: ShoppingCartItem) {
        this.cartService.removeItem(item);
    }

    clear() {
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<Order> {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(`${environment.api}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
            .map(response => response.json());
    }

}
