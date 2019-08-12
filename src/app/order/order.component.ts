import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: ShoppingCartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: ShoppingCartItem) {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: ShoppingCartItem) {
    this.orderService.removeItem(item);
  }

}
