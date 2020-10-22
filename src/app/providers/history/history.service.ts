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
  private historyOrders: HistoryOrder[];

  public getHistoryOrder(): HistoryOrder[] {
    return this.historyOrders;
  }

  constructor(private api: ApiService) {
  }

  public getUserOrders(userID: number) {
    console.log(this.url + userID);
    this.api.get(this.url, userID + this.endpoint).subscribe((userOrders: any) => {
      this.historyOrders = userOrders;
  //     for (const order of userOrders) {
  //       this.historyOrders.push({currency: undefined, orderItems: [], price: 0, timestamp: order.timestamp});
  //       for (const orderItem of order.orderItems) {
  //           this.historyOrders.orderItems.push({ new Product().fromJSON(orderItem.product),  orderItem.count})
  // }
  //     }
    });
  }
}

// timestamp: string;
// orderItems: OrderItem[];
// price: number;
// currency: Currency;
