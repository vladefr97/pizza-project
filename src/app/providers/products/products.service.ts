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
  //   [
  //   {
  //     id: 1,
  //     name: 'Pepperoni',
  //     basePrice: 100,
  //     description: 'Mozzarella cheese,Smoked sausage, chili pepper, Tomatoes in their own juice, Oregano, Garlic, ground black pepper',
  //     imgName: '1'
  //   },
  //   {id: 2, name: 'Margarita', basePrice: 100, description: 'Mozzarella cheese, tomatoes, fresh Basil, tomato sauce', imgName: '2'},
  //   {
  //     id: 3,
  //     name: 'Four Cheeses',
  //     basePrice: 100,
  //     description: 'Tomato sauce, mozzarella, Parmesan, Gorgonzola cheese, artichokes and oregano',
  //     imgName: '3'
  //   },
  //   {
  //     id: 4,
  //     name: 'Calzone',
  //     basePrice: 100,
  //     description: 'Tomato sauce, mozzarella, ham, mushrooms, artichokes, anchovies and oregano',
  //     imgName: '4'
  //   },
  //   {
  //     id: 5,
  //     name: 'Hawaiian',
  //     basePrice: 100,
  //     description: 'Pineapple, chicken fillet, ham, cheese , oregano, tomato paste',
  //     imgName: '5'
  //   },
  //   {id: 6, name: 'Diavola', basePrice: 100, description: 'Tomato sauce, mozzarella, hot salami and chili pepper', imgName: '6'},
  //   {id: 7, name: 'Neapolitano', basePrice: 100, description: 'Tomato sauce, mozzarella, oregano, anchovies', imgName: '7'},
  //   {id: 8, name: 'Marinara', basePrice: 100, description: 'Tomato sauce, garlic and Basil', imgName: '8'},
  //   {
  //     id: 9,
  //     name: 'Emiliana',
  //     basePrice: 100,
  //     description: 'Tomato sauce, mozzarella, eggplant, boiled potatoes and sausage',
  //     imgName: '9'
  //   },
  //   {
  //     id: 10,
  //     name: 'Belarusian',
  //     basePrice: 100,
  //     description: 'Hunting sausages, mozzarella cheese, tomatoes, red onion, Basil, Parmesan cheese, tomato sauce',
  //     imgName: '10'
  //   }
  // ];
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
    this.moneyService.getCurrencyExchangeRate(targetCurrency).subscribe(exchangeRate => {
      this.currency = targetCurrency;
      this.products.forEach((product) => {
        product.setExchangedPrice(targetCurrency, exchangeRate);
      });
    }, error => console.log(error));

  }

}
