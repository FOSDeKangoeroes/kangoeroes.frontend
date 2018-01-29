import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptor} from './http-interceptor';

describe('HttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptor]
    });
  });

  it('should be created', inject([HttpInterceptor], (service: HttpInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
