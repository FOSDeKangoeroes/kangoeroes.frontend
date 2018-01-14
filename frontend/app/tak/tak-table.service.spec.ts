import { TestBed, inject } from '@angular/core/testing';

import { TakTableService } from './tak-table.service';

describe('TakTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakTableService]
    });
  });

  it('should be created', inject([TakTableService], (service: TakTableService) => {
    expect(service).toBeTruthy();
  }));
});
