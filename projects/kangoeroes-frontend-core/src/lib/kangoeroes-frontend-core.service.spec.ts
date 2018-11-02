import { TestBed, inject } from '@angular/core/testing';

import { KangoeroesFrontendCoreService } from './kangoeroes-frontend-core.service';

describe('KangoeroesFrontendCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KangoeroesFrontendCoreService]
    });
  });

  it('should be created', inject([KangoeroesFrontendCoreService], (service: KangoeroesFrontendCoreService) => {
    expect(service).toBeTruthy();
  }));
});
