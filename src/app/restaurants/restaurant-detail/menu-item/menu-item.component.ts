import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from './menu-item.model';
import { RestaurantAnimations } from 'app/restaurants/restaurant/restaurant.animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [RestaurantAnimations.menuItemAppeared]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
