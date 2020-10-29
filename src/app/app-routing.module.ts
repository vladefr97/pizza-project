import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {OrderComponent} from './units/base/order/order.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {HistoryComponent} from './pages/history/history.component';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'order', component: OrderPageComponent, data: {animation: 'isRight'}
  },
  {
    path: 'history', component: HistoryComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {
}
