import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: ShoppingCartItem[];
  @Output() increaseQty = new EventEmitter<ShoppingCartItem>();
  @Output() decreaseQty = new EventEmitter<ShoppingCartItem>();
  @Output() removeItem = new EventEmitter<ShoppingCartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: ShoppingCartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: ShoppingCartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemoveItem(item: ShoppingCartItem) {
    this.removeItem.emit(item);
  }

}
