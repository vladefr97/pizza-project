import {Component, Input, OnInit} from '@angular/core';
import {DeliveryService} from '../../../providers/delivery/delivery.service';
import {OrderItem} from '../../../models/order-item/order-item';
import {Currency} from '../../../models/currency/currency';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() orderItem: OrderItem;
  @Input() withControls = true;
  currency: Currency;

  constructor(private deliveryService: DeliveryService) {
    this.currency = Currency.USD;
  }

  ngOnInit() {
  }

  increaseCount() {
    this.orderItem.increaseOrderCount();
  }

  decreaseCount() {
    this.orderItem.decreaseOrderCount();
  }

  deleteFromCart() {
    this.deliveryService.delete(this.orderItem);
  }
}
