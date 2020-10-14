import {Component, OnInit} from '@angular/core';
import {OrderItemsService} from '../../../providers/order-items/order-items.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss']
})
export class OrderCartComponent implements OnInit {

  constructor(private orderItemsService: OrderItemsService) {
  }

  ngOnInit() {
  }

}
