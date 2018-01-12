import { TestBed, inject } from '@angular/core/testing';

import { LeidingResolverService } from './leiding-resolver.service';

describe('LeidingResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeidingResolverService]
    });
  });

  it('should be created', inject([LeidingResolverService], (service: LeidingResolverService) => {
    expect(service).toBeTruthy();
  }));
});
