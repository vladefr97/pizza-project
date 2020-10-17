import {Component, OnInit} from '@angular/core';
import {OrderItemsService} from '../../providers/order-items/order-items.service';
import {MoneyService} from '../../providers/money/money.service';
import {Currency} from '../../models/currency/currency';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  // orderItem: Product;

  constructor(private orderItemsService: OrderItemsService, private money: MoneyService) {
  }

  ngOnInit() {
  }

  convertCurrency() {
    // const convertedValue = this.money.convertCurrency(200, Currency.USD, Currency.EUR).subscribe(targetAmount => {
    //   console.log(targetAmount);
    // });

  }
}
