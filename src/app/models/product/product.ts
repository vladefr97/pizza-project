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
  params: string[];
  priceMultiplier = 1;

  constructor() {
    super();
  }

  set price(value: number) {
    this._price = value;
  }

  get price(): number {
    if (this.currency === this.baseCurrency) {
      return this.basePrice * this.priceMultiplier;
    } else {
      return this._price * this.priceMultiplier;
    }
  }

  public getParamsStr() {
    let str = '';
    for (const param of this.params) {
      str += ` ${param}`;
    }
    return str;
  }

  public paramsIsEqualTo(product: Product): boolean {
    for (let i = 0; i < this.params.length; i++) {
      if (this.params[i] !== product.params[i]) {
        return false;
      }
    }
    return true;
  }

  public toJSON() {
    return {
      baseCurrency: this.baseCurrency,
      currency: this.currency,
      id: this.id,
      basePrice: this.basePrice,
      name: this.name,
      description: this.description,
      imgName: this.imgName,
      params: this.params.slice(),
      priceMultiplier: this.priceMultiplier,
      _price: this.price
    };

  }

  public setExchangedPrice(targetCurrency: Currency, exchangeRate: number) {
    this.currency = targetCurrency;
    this._price = this.basePrice * exchangeRate;
  }

  public setPriceMultiplier(targetMultiplier): void {
    this.priceMultiplier = targetMultiplier;
  }

  public getPriceMultiplier(): number {
    return this.priceMultiplier;
  }

}

