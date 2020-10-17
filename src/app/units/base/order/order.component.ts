import {Component, Input, OnInit} from '@angular/core';
import {OrderItemsService} from '../../../providers/order-items/order-items.service';
import {OrderItem} from '../../../models/order-item/order-item';
import {Currency} from '../../../models/currency/currency';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() orderItem: OrderItem;
  currency: Currency;


  constructor(private orderItemsService: OrderItemsService) {
    this.currency = Currency.USD;
  }

  ngOnInit() {
  }

  public convertCurrency() {
    this.currency = Currency.EUR;
  }

  increaseCount() {
    this.orderItem.increaseOrderCount();
  }

  decreaseCount() {
    this.orderItem.decreaseOrderCount();

  }

  deleteFromCart() {
    this.orderItemsService.delete(this.orderItem);
  }
}
