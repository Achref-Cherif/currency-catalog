import { Component, OnInit,Input } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  constructor(private helperService:HelperService) { }

  ngOnInit() {
  }

  allItems

  @Input()
  items

  pages = [];
  size = 10;
  currentPage = 0;
  maxlenght = 0;
  lastPage = 1;

  setPage(p) {
    this.currentPage = p;
    this.items = this.allItems.slice(p * this.size, (p + 1) * this.size)
    this.pages = this.helperService.generatePages(this.currentPage, this.lastPage)
  }


  onPageSizeChange(newValue){
    this.size=newValue
    this.updatePaging(this.allItems);
  }

  updatePaging(allItems){
    this.allItems=allItems;
    this.currentPage=0;
    this.items = this.allItems.slice(this.currentPage, this.size);
    this.maxlenght = this.allItems.length;
    this.lastPage = Math.ceil(this.maxlenght / this.size)
    this.pages = this.helperService.generatePages(this.currentPage, this.lastPage, this.size);
  }

}
