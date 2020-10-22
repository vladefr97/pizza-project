// Standard and third party imports
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';
// Project imports
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './units/project/header/header.component';
import {CardComponent} from './units/base/card/card.component';
import {OrderComponent} from './units/base/order/order.component';
import {OrderCartComponent} from './units/base/order-cart/order-cart.component';
import {SidebarComponent} from './units/project/sidebar/sidebar.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {SelectComponent} from './units/base/ui-elements/select/select.component';
import {TotalCostComponent} from './units/base/ui-elements/total-cost/total-cost.component';
import {DeliveryFormComponent} from './units/project/forms/delivery-form/delivery-form.component';
import {AuthSidebarComponent} from './units/project/auth-sidebar/auth-sidebar.component';
import {HistoryComponent} from './pages/history/history.component';
import {OrderSpoilerComponent} from './units/base/order-spoiler/order-spoiler.component';

const MaterialComponents = [MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    OrderComponent,
    OrderCartComponent,
    SidebarComponent,
    OrderPageComponent,
    SelectComponent,
    TotalCostComponent,
    DeliveryFormComponent,
    AuthSidebarComponent,
    HistoryComponent,
    OrderSpoilerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports: [MaterialComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
