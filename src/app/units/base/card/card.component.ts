import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {OrderItemsService} from "../../../providers/order-items/order-items.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //  @Input() imgName: string;
  //  @Input() name: string;
  // description: string;

  @Input() product: Product;

  constructor(private  orderItemsService: OrderItemsService) {
  }

  ngOnInit() {
  }

  addToOrderCart() {
    this.orderItemsService.addToOrder(this.product);
  }
}
