import {Product} from '../product/product';

export class OrderItem {
  public product: Product;
  public count: number;

  constructor(prod: Product) {
    this.product = prod;
    this.count = 1;
  }

  public increaseOrderCount() {
    this.count++;
  }

  public decreaseOrderCount() {
    this.count = this.count > 1 ? --this.count : 1;
  }

  public getPrice(): number {
    return this.product.price * this.count;
  }
}
