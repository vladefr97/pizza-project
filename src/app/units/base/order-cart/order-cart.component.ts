import {Component, OnInit} from '@angular/core';
import {DeliveryService} from '../../../providers/delivery/delivery.service';
import {OrderItem} from '../../../models/order-item/order-item';
import {Currency} from '../../../models/currency/currency';
import {ProductsService} from '../../../providers/products/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {
  orders: OrderItem[] = [];

  constructor(public deliveryService: DeliveryService, public productsService: ProductsService, private router: Router) {
    this.deliveryService.orderItemsUpdate().subscribe((orderItems) => {
      this.orders = orderItems;
    });
  }

  ngOnInit() {
  }

  convertCurrency() {
    this.productsService.convertProductsCurrency(Currency.EUR);
  }

  redirectToOrderPage() {
    this.router.navigateByUrl('/order');
  }
}
