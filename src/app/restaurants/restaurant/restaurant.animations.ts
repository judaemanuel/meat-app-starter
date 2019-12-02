import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const RestaurantAnimations: any = {
    restaurantAppeared: trigger('restaurant-appeared', [
        state('ready', style({ opacity: 1 })),
        transition('void => ready', [
            style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
            animate('300ms 0s ease-in-out')
        ])
    ]),
    restaurantDetailAppeared: trigger('restaurant-detail-appeared', [
        state('ready', style({ opacity: 1 })),
        transition('void => ready', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('300ms 0s ease-in')
        ])
    ]),
    menuItemAppeared: trigger('menu-item-appeared', [
        state('ready', style({ opacity: 1 })),
        transition('void => ready', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('300ms 150ms ease-in')
        ])
    ]),
    shoppingCartAppeared: trigger('shopping-cart-appeared', [
        state('ready', style({ opacity: 1 })),
        transition('void => ready', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('300ms 235ms ease-in')
        ])
    ]),
    cartItemInOut: trigger('cart-item-in-out', [
        state('ready', style({ opacity: 1 })),
        transition('void => ready', animate('300ms 0s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
            style({ opacity: 0.4, transform: 'translateX(30px)', offset: 0.4 }),
            style({ opacity: 0.6, transform: 'translateX(0px)', offset: 0.6 }),
            style({ opacity: 0.8, transform: 'translateX(15px)', offset: 0.8 }),
            style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
        ]))),
        transition('ready => void', animate('300ms 0s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
            style({ opacity: 0.6, transform: 'translateX(-30px)', offset: 0.8 }),
            style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
        ])))
    ]),
    toggleSearchRestaurants: trigger('toggleSearch', [
        state('hidden', style({
            opacity: 0,
            'max-height': '0px'
        })),
        state('visible', style({
            opacity: 1,
            'max-height': '70px',
            'margin-top': '20px'
        })),
        transition('* => *', animate('250ms 0ms ease-in-out'))
    ])
};
