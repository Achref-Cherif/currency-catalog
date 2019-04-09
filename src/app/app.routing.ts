import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './currency-module/currency.module#CurrencyModule'
      }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}