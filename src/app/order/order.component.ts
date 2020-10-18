import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { RadioOption } from 'app/shared/radio/radio-option.model';

import { LoginService } from '../security/login/login.service';
import { OrderService } from './order.service';

import { ShoppingCartItem } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  delivery = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ];

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true };
    }

    return undefined;
  }

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(
        this.loginService.isLoggedIn()
          ? { value: this.loginService.user.name, disabled: true }
          : ''
        , [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control(
        this.loginService.isLoggedIn()
          ? { value: this.loginService.user.email, disabled: true }
          : ''
        , [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control(
        this.loginService.isLoggedIn()
          ? { value: this.loginService.user.email, disabled: true }
          : ''
        , [Validators.required, Validators.pattern(this.emailPattern)]),
      endereco: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complemento: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    },
      { validator: OrderComponent.equalsTo });
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
