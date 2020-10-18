import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

import { LoginService } from '../security/login/login.service';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';

import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';
import { Order } from './order.model';

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService
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
        let headers = new HttpHeaders();

        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }

        return this.http.post<Order>(`${environment.api}/orders`, order, { headers: headers });
    }

}
