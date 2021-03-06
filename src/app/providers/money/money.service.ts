import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {Currency} from '../../models/currency/currency';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private URL = 'https://openexchangerates.org/api';
  private ENDPOINT = 'latest.json';
  private APP_ID = 'e8944ecedaa240f49446023fade052dd';
  private currencyExchangePublisher$ = new Subject<any>();
  private BASE_CURRENCY = Currency.USD;


  constructor(private api: ApiService) {
  }

  public getCurrencyExchangeData(targetCurrency: Currency): Observable<any> {
    this.doCurrencyExchangeRateRequest(targetCurrency);
    return this.currencyExchangePublisher$.asObservable();
  }

  public getCurrencyExchangeObservable() {
    return this.currencyExchangePublisher$.asObservable();
  }


  private doCurrencyExchangeRateRequest(targetCurrency: Currency) {
    this.api.get(this.URL, this.ENDPOINT, {app_id: this.APP_ID, base: this.BASE_CURRENCY}).subscribe((response: any) => {
      this.currencyExchangePublisher$.next({currency: targetCurrency, rate: response.rates[targetCurrency]});
    });
  }
}
