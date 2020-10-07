import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './units/project/header/header.component';
import {NavComponent} from './units/project/nav/nav.component';
import {CardComponent} from './units/base/card/card.component';
import {OrderComponent} from './units/base/order/order.component';
import {OrderBasketComponent} from './units/base/order-basket/order-basket.component';
import {SidebarComponent} from './units/project/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatInputModule} from '@angular/material';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { SelectComponent } from './units/base/ui-elements/select/select.component';

const MaterialComponents = [MatIconModule,MatInputModule];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    CardComponent,
    OrderComponent,
    OrderBasketComponent,
    SidebarComponent,
    OrderPageComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents
  ],
  exports: [MaterialComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
