import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCurrencyComponent } from './filter-currency.component';

describe('FilterCurrencyComponent', () => {
  let component: FilterCurrencyComponent;
  let fixture: ComponentFixture<FilterCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
