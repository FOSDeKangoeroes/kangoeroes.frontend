import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService {

  constructor() { }

  private loadingCount$ = new BehaviorSubject<number>(0);
  public loading$ = this.loadingCount$.asObservable().map(loadingCount => loadingCount > 0);

  startLoading() {
    const val = this.loadingCount$.value;
    this.loadingCount$.next(val + 1);
  }

  stopLoading() {
    const val = this.loadingCount$.value;
    this.loadingCount$.next(val - 1);
  }
}
