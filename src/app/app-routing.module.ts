import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {OrderComponent} from './units/base/order/order.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'order', component: OrderPageComponent, data: {animation: 'isRight'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
