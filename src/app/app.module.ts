import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { ReviewComponent } from './restaurants/restaurant-detail/reviews/review/review.component';
import { FooterComponent } from './footer/footer.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    ReviewComponent,
    FooterComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
