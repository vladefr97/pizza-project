import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {HistoryOrder} from '../../models/history-order/history-order';
import {environment} from '../../../environments/environment';
import {OrderItem} from '../../models/order-item/order-item';
import {Currency} from '../../models/currency/currency';
import {Product} from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private url = environment.userUrl;
  private endpoint = '/orders';
  private historyOrders: HistoryOrder[] = [];

  public getHistoryOrder(): HistoryOrder[] {
    return this.historyOrders;
  }

  constructor(private api: ApiService) {
  }

  public getUserOrders(userID: number) {
    console.log(this.url + userID);

    this.api.get(this.url, userID + this.endpoint).subscribe((userOrders: any) => {
      this.historyOrders = [];
      console.log(userOrders);
      userOrders.forEach((order, index) => {
        this.historyOrders.push({currency: order.currency, orderItems: [], price: order.price, timestamp: order.timestamp});
        for (const orderItem of order.orderItems) {
          const product = new Product();
          // orderItem.product.params = orderItem.product.params;
          product.fromJSON( orderItem.product);
          const oitem = new OrderItem(product);
          oitem.count = orderItem.count;
          this.historyOrders[index].orderItems.push(oitem);
        }
      });

      console.log(this.historyOrders);
    });
  }
}
