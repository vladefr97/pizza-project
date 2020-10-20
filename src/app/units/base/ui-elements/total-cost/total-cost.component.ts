import {Component, OnInit} from '@angular/core';
import {Currency} from '../../../../models/currency/currency';
import {ProductsService} from '../../../../providers/products/products.service';
import {DeliveryService} from '../../../../providers/delivery/delivery.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit {
  selectedCurrency: Currency;
  currencies = {USD: Currency.USD, EUR: Currency.EUR};

  constructor(private productsService: ProductsService, public deliveryService: DeliveryService) {
    this.selectedCurrency = this.productsService.getCurrency();
  }

  ngOnInit() {
  }

  selectCurrency(currencyStr: string) {
    this.selectedCurrency = this.currencies[currencyStr];
    this.productsService.convertProductsCurrency(this.selectedCurrency);
  }
}
