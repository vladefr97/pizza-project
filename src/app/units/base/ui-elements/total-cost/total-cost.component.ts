import {Component, OnInit} from '@angular/core';
import {Currency} from '../../../../models/currency/currency';
import {ProductsService} from '../../../../providers/products/products.service';
import {OrderItemsService} from '../../../../providers/order-items/order-items.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit {

  constructor(private productsService: ProductsService, private orderItemsService: OrderItemsService) {
    this.selectedCurrency = this.productsService.getCurrency();
  }

  selectedCurrency: Currency;
  currencies = {USD: Currency.USD, EUR: Currency.EUR};

  ngOnInit() {
  }

  selectCurrency(currencyStr: string) {
    this.selectedCurrency = this.currencies[currencyStr];
    this.productsService.convertProductsCurrency(this.selectedCurrency);
  }
}
