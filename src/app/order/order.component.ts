import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RadioOption } from 'app/shared/radio/radio-option.model';

import { OrderService } from './order.service';

import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ];

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: ShoppingCartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order).subscribe((orderNew: Order) => {
      this.router.navigate(['/order-summary']);
      console.log(`Compra concluída: ${orderNew.id}`);
      this.orderService.clear();
    });
  }

}
