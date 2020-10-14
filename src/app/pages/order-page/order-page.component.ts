import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product/product';
import {OrderItemsService} from '../../providers/order-items/order-items.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  // orderItem: Product;

  constructor(private orderItemsService: OrderItemsService) {
  }

  ngOnInit() {
  }

}
