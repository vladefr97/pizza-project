import {Component, Input, OnInit} from '@angular/core';
import {HistoryOrder} from '../../../models/history-order/history-order';

@Component({
  selector: 'app-order-spoiler',
  templateUrl: './order-spoiler.component.html',
  styleUrls: ['./order-spoiler.component.scss']
})
export class OrderSpoilerComponent implements OnInit {

  @Input() historyOrder: HistoryOrder;
  bodyIsDisplayed = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleOrderBodyDisplay() {
    this.bodyIsDisplayed = !this.bodyIsDisplayed;
  }

}
