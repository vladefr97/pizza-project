import {Currency} from '../currency/currency';
import {Serializable} from '../../libs/serialization/serializable';

export class Product extends Serializable {
  baseCurrency: Currency = Currency.USD;
  currency = Currency.USD;
  id: number;
  basePrice: number;
  name: string;
  description: string;
  imgName: string;

  // tslint:disable-next-line:variable-name
  private _price: number;
  get price(): number {
    if (this.currency === this.baseCurrency) {
      return this.basePrice;
    } else {
      return this._price;
    }
  }
  constructor() {
    super();
  }

  public setExchangedPrice(targetCurrency: Currency, exchangeRate: number) {
    this.currency = targetCurrency;
    this._price = this.basePrice * exchangeRate;
  }


}

