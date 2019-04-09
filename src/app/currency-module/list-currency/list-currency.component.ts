import { Component, OnInit, OnDestroy ,ViewChild} from '@angular/core';
import { Currency } from '../models/Currency';
import { CurrencyService } from '../services/currency.service';
import { HelperService } from '../services/helper.service';
import { FilterCurrencyItem } from '../models/FilterCurrencyItem';
import { PagingComponent } from '../paging/paging.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.css']
})
export class ListCurrencyComponent implements OnInit, OnDestroy {


  constructor(private currencyService: CurrencyService,
    private router: Router,
    private helperService: HelperService) { }

  title = "Available currencies";

  @ViewChild(PagingComponent)
  pagingC:PagingComponent;

  allCurrency: Currency[] = [];
  filtredItems: Currency[] = [];
  allCurrencySubscribtion;
  filterCurrencyItem: FilterCurrencyItem = new FilterCurrencyItem();

  ngOnInit() {
    this.currencyService.getAllCurrency().toPromise().then(data => {
      this.filtredItems = this.allCurrency = data;
      this.pagingC.updatePaging(this.filtredItems);
    })
  }

  ngOnDestroy(): void {
  }


  onFilterChange() {
    if (this.filterCurrencyItem.value != undefined && this.filterCurrencyItem.value != "" && this.filterCurrencyItem.name != "")
      this.filtredItems = this.allCurrency.filter(currency => currency[this.filterCurrencyItem.name].toLowerCase()
        .lastIndexOf(this.filterCurrencyItem.value.toLowerCase(), 0) === 0
      );
    else
      this.filtredItems = this.allCurrency;
      this.pagingC.updatePaging(this.filtredItems);

  }

  afficheDetails(code) {
    this.router.navigate(["/currency", code]);
  }


}
