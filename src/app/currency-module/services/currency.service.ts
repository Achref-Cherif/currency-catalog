import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/Currency';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { FilterCurrencyItem } from '../models/FilterCurrencyItem';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  getCurrencyByCode(code: string): Observable<Currency> {
    return this.httpClient.get<Currency>(environment.currenyApiUrl+code);
  }

  constructor(private httpClient: HttpClient) { }

  public getAllCurrency(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(environment.currenyApiUrl);
    
  }

}
