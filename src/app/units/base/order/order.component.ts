import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {OrderItemsService} from '../../../providers/order-items/order-items.service';
import {OrderItem} from '../../../models/order-item/order-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() orderItem: OrderItem;


  constructor(private orderItemsService: OrderItemsService) {

  }

  ngOnInit() {
  }

  increaseCount() {
    this.orderItem.increaseOrderCount();
  }

  decreaseCount() {
    this.orderItem.decreaseOrderCount();

  }

  deleteFromOrder() {
    this.orderItemsService.delete(this.orderItem);
  }
}
