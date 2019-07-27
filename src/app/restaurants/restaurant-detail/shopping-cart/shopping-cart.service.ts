import { ShoppingCartItem } from "./shopping-cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: ShoppingCartItem[] = [];

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id);
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1;
        } else {
            this.items.push(new ShoppingCartItem(item));
        }
    }

    removeItem(item: ShoppingCartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    clear() {
        this.items = [];
    }
}