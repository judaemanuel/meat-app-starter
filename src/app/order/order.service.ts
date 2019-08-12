import { Injectable } from '@angular/core';

import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService
    ) { }

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

}
