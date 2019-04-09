import { Component, OnInit ,Input,Output ,EventEmitter } from '@angular/core';
import { FilterCurrencyItem } from '../models/FilterCurrencyItem';

@Component({
  selector: 'app-filter-currency',
  templateUrl: './filter-currency.component.html',
  styleUrls: ['./filter-currency.component.css']
})
export class FilterCurrencyComponent implements OnInit {


  @Input()
  filterCurrencyItem:FilterCurrencyItem;

  @Output()
  onFilterChange =new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


  onNameChange(newValue){
    this.filterCurrencyItem.name=newValue;
    this.onFilterChange.emit();
  }

  onKeyUp(){
    this.onFilterChange.emit();
  }
}
