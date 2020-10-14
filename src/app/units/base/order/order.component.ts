import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() product: Product;
  private count = 1;

  constructor() {
  }

  ngOnInit() {
  }

  private increaseCount() {
    this.count++;
  }

  private decreaseCount() {
    this.count = this.count <= 1 ? 1 : --this.count;

  }

  deleteFromOrder() {

  }
}
