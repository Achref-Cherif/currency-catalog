import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCurrencyComponent } from './list-currency/list-currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencyDetailsResolveService } from './services/currency-details-resolve.service';

export const routes: Routes = [
    {
        path: '',
        component:ListCurrencyComponent
      },
      {
        path: 'currency/:code',
        component: CurrencyDetailsComponent,
        resolve: {
          currency: CurrencyDetailsResolveService
        },
      },
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class CurrencyRoutingModule {}