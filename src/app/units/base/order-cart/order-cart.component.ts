import {Component, OnInit} from '@angular/core';
import {OrderItemsService} from '../../../providers/order-items/order-items.service';
import {OrderItem} from '../../../models/order-item/order-item';
import {Currency} from '../../../models/currency/currency';
import {ProductsService} from '../../../providers/products/products.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
  orders: OrderItem[];

  constructor(private orderItemsService: OrderItemsService, private productsService: ProductsService) {
    // this.orders = this.orderItemsService.allOrders();
    this.orderItemsService.orderItemsUpdate().subscribe((orderItems) => {
      this.orders = orderItems;
    });
  }

  ngOnInit() {
  }

  convertCurrency() {
    this.productsService.convertProductsCurrency(Currency.EUR);
  }

  deleteFromCart() {

  }
}
