import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCurrencyComponent } from '../currency-module/list-currency/list-currency.component';
import { CurrencyRoutingModule } from './currency.routing';
import { FilterCurrencyComponent } from '../Currency-module/filter-currency/filter-currency.component';
import { FormsModule } from '@angular/forms';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [ListCurrencyComponent, FilterCurrencyComponent, CurrencyDetailsComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CurrencyModule { }
