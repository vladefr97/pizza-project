import {Injectable} from '@angular/core';
import {Product} from '../../models/product/product';
import {Currency} from '../../models/currency/currency';
import {MoneyService} from '../money/money.service';
import {ApiService} from '../api/api.service';
import {environment} from '../../../environments/environment';
import {DisplayService} from '../display/display.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];
  private currency: Currency = Currency.USD;
  private productJSONArray;
  url = environment.restUrl;
  endpoint = 'all-products';

  constructor(private moneyService: MoneyService, private api: ApiService, private displayService: DisplayService) {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.api.get(this.url, this.endpoint).subscribe((res: any) => {
      this.productJSONArray = res;
      this.createProducts();
      this.displayService.isLoaderDisplayed = false;
    });
  }

  public getCurrency() {
    return this.currency;
  }

  private createProducts() {
    for (const productJson of this.productJSONArray) {
      const product = new Product();
      product.fromJSON(productJson);
      this.products.push(product);
    }
  }

  public getAllProducts(): Product[] {
    return this.products;
  }

  public convertProductsCurrency(targetCurrency: Currency) {
    this.moneyService.getCurrencyExchangeData(targetCurrency).subscribe(exchangeData => {
      const rate = exchangeData.rate;
      this.currency = exchangeData.currency;
      this.products.forEach((product) => {
        product.setExchangedPrice(targetCurrency, rate);
      });
    }, error => console.log(error));

  }

}
