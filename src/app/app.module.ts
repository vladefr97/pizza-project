import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './units/project/header/header.component';
import {NavComponent} from './units/project/nav/nav.component';
import {CardComponent} from './units/base/card/card.component';
import {OrderComponent} from './units/base/order/order.component';
import {OrderCartComponent} from './units/base/order-cart/order-cart.component';
import {SidebarComponent} from './units/project/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatInputModule} from '@angular/material';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { SelectComponent } from './units/base/ui-elements/select/select.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from "@angular/common/http";
import { TotalCostComponent } from './units/base/ui-elements/total-cost/total-cost.component';
import { OrderFormComponent } from './units/project/forms/order-form/order-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DeliveryFormComponent } from './units/project/forms/delivery-form/delivery-form.component';

const MaterialComponents = [MatIconModule,MatInputModule];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    CardComponent,
    OrderComponent,
    OrderCartComponent,
    SidebarComponent,
    OrderPageComponent,
    SelectComponent,
    TotalCostComponent,
    OrderFormComponent,
    DeliveryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [MaterialComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
