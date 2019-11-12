import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

import { OrderRouter } from './order.route';

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [OrderRouter, SharedModule],
    exports: []
})
export class OrderModule { }
