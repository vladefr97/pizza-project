import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';
import {DeliveryService} from "../../../providers/delivery/delivery.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor(private  orderItemsService: DeliveryService) {
  }

  ngOnInit() {
  }

  addToOrderCart() {
    this.orderItemsService.addToOrder(this.product);
  }
}
