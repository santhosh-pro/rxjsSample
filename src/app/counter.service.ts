import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseApiService } from "./base-api.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthHelperService} from "./auth-helper.service";
import { State } from "./state";
const hostUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CounterService extends BaseApiService{

  private readonly _items = new BehaviorSubject<State<any>>(new State<any>(null));
  readonly items$ = this._items.asObservable();

  constructor(http: HttpClient, authService: AuthHelperService) {
    super(http, authService, hostUrl);
  }

  getItems() {
    const response = new State<any>(this._items);
    response.notifyLoading();
    return super.get<any>('todos').subscribe(res=>{
      response.notifySuccess(res);
    },err=>{
      response.notifyError("Failed");
    });
  }

}
