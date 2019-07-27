import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service';

import { MenuItem } from "../menu-item/menu-item.model";
import { ShoppingCartItem } from "./shopping-cart-item.model";

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: ShoppingCartItem){
    this.shoppingCartService.removeItem(item);
  }

  clear(){
    this.shoppingCartService.clear();
  }

  items(): ShoppingCartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
