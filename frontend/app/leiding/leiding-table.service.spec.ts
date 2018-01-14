import { TestBed, inject } from '@angular/core/testing';

import { LeidingTableService } from './leiding-table.service';

describe('LeidingTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeidingTableService]
    });
  });

  it('should be created', inject([LeidingTableService], (service: LeidingTableService) => {
    expect(service).toBeTruthy();
  }));
});
