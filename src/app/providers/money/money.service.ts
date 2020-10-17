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
  private currencyExchangePublisher$ = new Subject<number>();
  private BASE_CURRENCY = Currency.USD;
  private currency;


  constructor(private api: ApiService) {
  }

  public getCurrencyExchangeRate(targetCurrency: Currency): Observable<number> {
    this.doCurrencyExchangeRateRequest(targetCurrency);
    return this.currencyExchangePublisher$.asObservable();
  }

  private doCurrencyExchangeRateRequest(targetCurrency: Currency) {
    console.log('send request');
    this.api.get(this.URL, this.ENDPOINT, {app_id: this.APP_ID, base: this.BASE_CURRENCY}).subscribe((response: any) => {
      console.log('got request');
      this.currencyExchangePublisher$.next(response.rates[targetCurrency]);
    });
  }


}
