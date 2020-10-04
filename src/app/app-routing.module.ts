import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {OrderComponent} from './units/base/order/order.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{path: 'order', component: OrderComponent}]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
