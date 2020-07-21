import { TestBed, inject } from '@angular/core/testing';

import { CleaningOrderServiceService } from './cleaning-order.service';

describe('CleaningOrderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CleaningOrderServiceService]
    });
  });

  it('should be created', inject([CleaningOrderServiceService], (service: CleaningOrderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
