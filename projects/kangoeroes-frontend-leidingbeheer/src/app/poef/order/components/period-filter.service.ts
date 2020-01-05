import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { calculateStartDate } from 'projects/kangoeroes-frontend-core/src/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class PeriodFilterService {
  private selectedStartDateSource = new BehaviorSubject<Date>(
    calculateStartDate()
  );
  private selectedEndDateSource = new BehaviorSubject<Date>(new Date());

  startDate$ = this.selectedStartDateSource.asObservable();
  endDate$ = this.selectedEndDateSource.asObservable();
  constructor() { }

  applyFilter(start: Date = null, end: Date = null) {

    if (start !== null) {
      this.selectedStartDateSource.next(start);
    }

    if (end !== null) {
      this.selectedEndDateSource.next(end);
    }
  }
}
