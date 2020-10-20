import {Injectable} from '@angular/core';
import {Product} from '../../models/product/product';
import {OrderItem} from '../../models/order-item/order-item';
import {Observable, Subject} from 'rxjs';
import {from} from 'rxjs';
import {ApiService} from '../api/api.service';
import {environment} from '../../../environments/environment';
import {ProductsService} from '../products/products.service';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private orderItemsMap: Map<number, OrderItem> = new Map<number, OrderItem>();
  private orderItemsPublisher$ = new Subject<OrderItem[]>();
  private totalSum: number;
  private url = environment.restUrl;

  constructor(private api: ApiService, private productsService: ProductsService, private authService: AuthService) {
  }

  public getPrice() {
    this.totalSum = 0;
    for (const order of this.orderItemsMap.values()) {
      this.totalSum += order.getPrice();
    }
    return this.totalSum;
  }

  public addToOrder(product: Product): void {
    if (!this.orderItemsMap.has(product.id)) {
      this.orderItemsMap.set(product.id, new OrderItem(product));
    } else {
      this.orderItemsMap.get(product.id).increaseOrderCount();
    }
    this.orderItemsPublisher$.next(Array.from(this.orderItemsMap.values()));
  }

  public orderItemsUpdate(): Observable<OrderItem[]> {
    return this.orderItemsPublisher$.asObservable();
  }

  public delete(orderItem: OrderItem): void {
    this.orderItemsMap.delete(orderItem.product.id);
  }

  public allOrders(): OrderItem[] {
    return Array.from(this.orderItemsMap.values());
  }

  public makeOrder(serviceInformation: any) {
    const orderInformation = {
      totalSum: this.totalSum,
      currency: this.productsService.getCurrency(),
      userId: this.authService.getAuthorizedUserId()
    };
    this.api.post(this.url, 'order', {
      serviceInformation,
      orderInformation,
      timestamp: new Date().getTime(),
      items: Array.from(this.orderItemsMap.values())
    }).subscribe(res => console.log(res), error => console.log(error));
  }
}
