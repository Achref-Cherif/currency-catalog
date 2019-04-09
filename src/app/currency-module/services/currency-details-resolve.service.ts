import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CurrencyService } from './currency.service';
import { Currency } from '../models/Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailsResolveService  implements Resolve<any> {

  constructor(private currencyService:CurrencyService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
    let code = route.params['code'];
    return this.currencyService.getCurrencyByCode(code).toPromise().then((currency:Currency )=> {
        if (currency) {
            return currency;
        } else {
          return false;
        }
    });
}
}
