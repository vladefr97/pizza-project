import {Product} from '../product/product';

export class OrderItem {
  public product: Product;
  public count: number;

  constructor(prod: Product) {
    console.log(`pddr ${prod}`);

    this.product = prod;
    this.count = 1;
  }

  public increaseOrderCount() {
    this.count++;
  }

  public decreaseOrderCount() {
    this.count = this.count > 1 ? --this.count : 1;
  }

  public getDollarPrice(): number {
    return this.product.dollarPrice * this.count;
  }
}
