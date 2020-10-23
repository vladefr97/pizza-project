import {Currency} from '../currency/currency';
import {Serializable} from '../../libs/serialization/serializable';

export class Product extends Serializable {

  // tslint:disable-next-line:variable-name
  private _price: number;
  baseCurrency: Currency = Currency.USD;
  currency = Currency.USD;
  id: number;
  basePrice: number;
  name: string;
  description: string;
  imgName: string;

  constructor() {
    super();
  }
  set price(value: number) {
    this._price = value;
  }
  get price(): number {
    if (this.currency === this.baseCurrency) {
      return this.basePrice;
    } else {
      return this._price;
    }
  }

  public setExchangedPrice(targetCurrency: Currency, exchangeRate: number) {
    this.currency = targetCurrency;
    this._price = this.basePrice * exchangeRate;
  }


}

