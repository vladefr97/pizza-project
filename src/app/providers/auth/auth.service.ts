import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {User} from '../../models/auth/user/user';
import {JwtResponse} from '../../models/auth/jwt-response/jwt-response';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = environment.userUrl;
  authSubject$ = new BehaviorSubject(false);
  authorizedUserInfoSubject$ = new Subject<JwtResponse>();
  jwtResponse: JwtResponse;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public getAuthorizedUserId(): number {
    return this.jwtResponse.user.id;
  }

  public getAuthorizedUserInfo(): Observable<JwtResponse> {
    return this.authorizedUserInfoSubject$.asObservable();
  }

  public register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`, user).pipe(
      tap((res: JwtResponse) => {
        if (res.user) {
          localStorage.setItem('ACCESS_TOKEN', res.user.access_token);
          this.jwtResponse = res;
          this.authSubject$.next(true);
          this.authorizedUserInfoSubject$.next(this.jwtResponse);
        }
      }, error => console.log(error))
    );
  }

  public singIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {
        if (res.user) {
          localStorage.setItem('ACCESS_TOKEN', res.user.access_token);
          this.jwtResponse = res;
          this.authorizedUserInfoSubject$.next(this.jwtResponse);
          this.authSubject$.next(true);
        }
      })
    );
  }

  public signOut() {
    localStorage.removeItem('ACCESS_TOKEN');
    this.authSubject$.next(false);
  }

  isAuthenticated() {
    return this.authSubject$.asObservable();
  }
}
