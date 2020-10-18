import {Component, OnInit} from '@angular/core';
import {DeliveryService} from '../../../providers/delivery/delivery.service';
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

  constructor(private deliveryService: DeliveryService, private productsService: ProductsService) {
    this.deliveryService.orderItemsUpdate().subscribe((orderItems) => {
      this.orders = orderItems;
    });
  }

  ngOnInit() {
  }

  convertCurrency() {
    this.productsService.convertProductsCurrency(Currency.EUR);
  }
}
