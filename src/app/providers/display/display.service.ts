import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private _isAuthSidebarDisplayed = false;
  private _isHeaderLogoActive = false;
  private _isHeaderLogoDisplayed = true;
  private _isLogoutDisplayed = false;
  private _isUserLoginDisplayed = false;
  private _isHistoryLinkDisplayed = false;

  set isAuthSidebarDisplayed(value: boolean) {
    this._isAuthSidebarDisplayed = value;
  }

  set isHeaderLogoActive(value: boolean) {
    this._isHeaderLogoActive = value;
  }

  get isAuthSidebarDisplayed(): boolean {
    return this._isAuthSidebarDisplayed;
  }


  get isHeaderLogoActive(): boolean {
    return this._isHeaderLogoActive;
  }

  get isHeaderLogoDisplayed(): boolean {
    return this._isHeaderLogoDisplayed;
  }

  get isLogoutDisplayed(): boolean {
    return this._isLogoutDisplayed;
  }

  get isHistoryLinkDisplayed(): boolean {
    return this._isHistoryLinkDisplayed;
  }

  get isUserLoginDisplayed(): boolean {
    return this._isUserLoginDisplayed;
  }


  constructor() {
  }

  public displayAuthorizedUserFunctionality(): void {
    this._isHeaderLogoActive = false;
    this._isHeaderLogoDisplayed = false;
    this._isAuthSidebarDisplayed = false;
    this._isLogoutDisplayed = true;
    this._isUserLoginDisplayed = true;
    this._isHistoryLinkDisplayed = true;
  }

  public hideAuthorizedUserFunctionality(): void {
    this._isHeaderLogoActive = false;
    this._isHeaderLogoDisplayed = true;
    this._isAuthSidebarDisplayed = false;
    this._isLogoutDisplayed = false;
    this._isUserLoginDisplayed = false;
    this._isHistoryLinkDisplayed = false;
  }

}
