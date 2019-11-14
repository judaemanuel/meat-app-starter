import { Injectable } from '@angular/core';
import { ShoppingCartItem } from './shopping-cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { NotificationService } from 'app/shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {
    items: ShoppingCartItem[] = [];

    constructor(private notificationService: NotificationService) { }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new ShoppingCartItem(item));
        }

        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

    increaseQty(item: ShoppingCartItem) {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: ShoppingCartItem) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: ShoppingCartItem) {
        this.items.splice(this.items.indexOf(item), 1);

        if (this.items.length > 0) {
            this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
        } else {
            this.notificationService.notify('Seu carrinho está vazio :(');
        }
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    clear() {
        this.items = [];

        this.notificationService.notify('Seu carrinho está vazio :(');
    }

}
