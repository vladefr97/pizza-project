import {OrderItem} from '../order-item/order-item';
import {Currency} from '../currency/currency';

export interface HistoryOrder {
  timestamp: string;
  orderItems: OrderItem[];
  price: number;
  currency: string;
}
