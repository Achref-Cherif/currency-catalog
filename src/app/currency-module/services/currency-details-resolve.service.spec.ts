import { TestBed } from '@angular/core/testing';

import { CurrencyDetailsResolveService } from './currency-details-resolve.service';

describe('CurrencyDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyDetailsResolveService = TestBed.get(CurrencyDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
