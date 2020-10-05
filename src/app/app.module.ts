import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './units/project/header/header.component';
import { NavComponent } from './units/project/nav/nav.component';
import { CardComponent } from './units/base/card/card.component';
import { OrderComponent } from './units/base/order/order.component';
import { OrderBasketComponent } from './units/base/order-basket/order-basket.component';
import { SidebarComponent } from './units/project/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    CardComponent,
    OrderComponent,
    OrderBasketComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
