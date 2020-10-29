import {Component, OnInit} from '@angular/core';
import {DeliveryService} from '../../providers/delivery/delivery.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  bodyIsDisplayed = true;
  orderDone = false;

  constructor(public deliveryService: DeliveryService) {
  }

  ngOnInit() {
  }

  toggleOrderBodyDisplay() {
    this.bodyIsDisplayed = !this.bodyIsDisplayed;
  }

  displayDone() {
    this.orderDone = true;
  }
}
