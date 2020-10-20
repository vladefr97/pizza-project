import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {HistoryOrder} from '../../models/history-order/history-order';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private url = environment.userUrl;
  private endpoint = '/orders';
  private historyOrders: HistoryOrder[];

  constructor(private api: ApiService) {
  }

  public getUserOrders(userID: number) {
    console.log(this.url + userID);
    this.api.get(this.url,  userID + this.endpoint).subscribe(res => console.log(res));
  }
}
