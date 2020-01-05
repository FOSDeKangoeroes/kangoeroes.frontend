import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { PeriodDataService } from '../../../period/shared/period-data.service';
import { Period } from '../../../period/shared/period.model';
import { PeriodFilterService } from '../period-filter.service';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-period-filter',
  templateUrl: './period-filter.component.html',
  styleUrls: ['./period-filter.component.scss']
})
export class PeriodFilterComponent implements OnInit {
  selectedStartDate: Date;
  selectedEndDate: Date;
  @Input() dataService: PeriodDataService;

  constructor(private periodFilter: PeriodFilterService) {}

  ngOnInit() {
    this.periodFilter.startDate$.subscribe(res => {

      this.selectedStartDate = res;
    });

    this.periodFilter.endDate$.subscribe(res => {
      this.selectedEndDate = res;
    });
  }

  onSelected(event: Period) {
   this.periodFilter.applyFilter(event.start, event.end);
  }

  onStartDateChanged(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      this.periodFilter.applyFilter(new Date(event.value), null);
    } else {
      this.periodFilter.applyFilter(null, null);
    }
  }

  onEndDateChanged(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      this.periodFilter.applyFilter(null, new Date(event.value));
    } else {
      this.periodFilter.applyFilter(null, null);
    }

  }

}
