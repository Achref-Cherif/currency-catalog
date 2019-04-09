import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/Currency';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  currentCurrency: Currency;
  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.currentCurrency = data.currency;
      })
  }

}
