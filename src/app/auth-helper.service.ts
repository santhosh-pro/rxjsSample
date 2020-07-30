import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const accessTokenKey = 'token';
const roleKey = 'roleKey';

@Injectable({
  providedIn: 'root'
})
export class AuthHelperService {

  isUserLogged$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  private readonly _username = new BehaviorSubject<string>("");
  readonly username$ = this._username.asObservable();

  private readonly _pincode = new BehaviorSubject<string>("");
  readonly pincode$ = this._pincode.asObservable();

  private readonly _couponCode = new BehaviorSubject<string>("");
  readonly couponCode$ = this._couponCode.asObservable();

  

  customerId: string;

  

  getAccessToken(): string {
    // return this.storage.getItem(accessTokenKey);
    return "V29vZHBlY2tlclJFU1RmdWxBUElBdXRob3JpemF0aW9uUGFzc3dvcmRpR25vdmF0ZQ=="
  }



  removeCouponCode() {
    localStorage.removeItem('couponCode');
  }

  

  
}
