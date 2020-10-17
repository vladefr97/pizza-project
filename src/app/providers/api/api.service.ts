import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  public get(url: string, endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(`${url}/${endpoint}`, reqOpts);

  }

  public post(url: string, endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(`${url}/${endpoint}`, body, reqOpts);
  }

  public put(url: string, endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(url + '/' + endpoint, body, reqOpts);
  }

  public delete(url: string, endpoint: string, reqOpts?: any) {
    return this.http.delete(url + '/' + endpoint, reqOpts);
  }

  patch(url: string, endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(url + '/' + endpoint, body, reqOpts);
  }

}
