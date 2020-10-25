import {Injectable} from '@angular/core';
import {Product} from '../../models/product/product';
import {OrderItem} from '../../models/order-item/order-item';
import {Observable, Subject} from 'rxjs';
import {from} from 'rxjs';
import {ApiService} from '../api/api.service';
import {environment} from '../../../environments/environment';
import {ProductsService} from '../products/products.service';
import {AuthService} from '../auth/auth.service';
import {Currency} from '../../models/currency/currency';
import {MoneyService} from '../money/money.service';

interface OrderItemWrapper {
  productOrders: OrderItem[];
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private orderItemsMap: Map<number, OrderItemWrapper> = new Map<number, OrderItemWrapper>();
  private orderItemsPublisher$ = new Subject<OrderItem[]>();
  private totalSum: number;
  private url = environment.restUrl;

  constructor(private api: ApiService, private productsService: ProductsService,
              private authService: AuthService, private moneyService: MoneyService) {
    this.moneyService.getCurrencyExchangeObservable().subscribe(exchangeData => {
      this.exchangeOrdersCurrency(exchangeData.currency, exchangeData.rate);

    }, error => console.log(error));
  }

  private exchangeOrdersCurrency(targetCurrency: Currency, targetRate: number) {
    this.getOrders().forEach((order) => {
      order.product.setExchangedPrice(targetCurrency, targetRate);
    });
  }

  public getPrice() {
    this.totalSum = 0;
    for (const order of this.getOrders()) {
      this.totalSum += order.getPrice();
    }
    return this.totalSum;
  }

  public getOrders() {
    const orders: OrderItem[] = [];
    const wrappers = this.orderItemsMap.values();
    for (const orderWrapper of wrappers) {
      orders.push.apply(orders, orderWrapper.productOrders);
    }
    return orders;
  }

  public addToOrder(product: Product): void {

    if (!this.orderItemsMap.has(product.id)) {
      const orderItemWrapper: OrderItemWrapper = {productOrders: [new OrderItem(product)]};
      this.orderItemsMap.set(product.id, orderItemWrapper);
    } else {
      const orderItemWrapper = this.orderItemsMap.get(product.id);
      let hasEqualProducts = false;
      for (const order of orderItemWrapper.productOrders) {
        if (product.paramsIsEqualTo(order.product)) {
          order.increaseOrderCount();
          hasEqualProducts = true;
          break;
        }
      }
      if (!hasEqualProducts) {
        orderItemWrapper.productOrders.push(new OrderItem(product));
      }
    }
    this.orderItemsPublisher$.next(this.getOrders());
  }

  public orderItemsUpdate(): Observable<OrderItem[]> {
    return this.orderItemsPublisher$.asObservable();
  }

  public delete(orderItem: OrderItem): void {
    if (this.orderItemsMap.has(orderItem.product.id)) {
      const orderItemWrapper = this.orderItemsMap.get(orderItem.product.id);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < orderItemWrapper.productOrders.length; i++) {
        if (orderItemWrapper.productOrders[i].product.paramsIsEqualTo(orderItem.product)) {
          orderItemWrapper.productOrders.splice(i, 1);
          break;
        }
      }
    } else {
      this.orderItemsMap.delete(orderItem.product.id);
    }

  }

  public allOrders(): OrderItem[] {
    return this.getOrders();
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
      items: this.getOrders(),
    }).subscribe(res => console.log(res), error => console.log(error));
  }
}
