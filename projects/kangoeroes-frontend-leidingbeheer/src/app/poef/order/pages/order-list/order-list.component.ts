import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../shared/order-data.service';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { Order } from '../../shared/order.model';
import { map, switchMap } from 'rxjs/operators';
import { OrderQueryOptions } from '../../shared/order-query-options';
import { OrderlineDataService } from '../../shared/orderline-data.service';
import { Orderline } from '../../shared/orderline.model';
import { OrderlineQueryOptions } from '../../shared/orderline-query-options';
import { OrderlineSummary } from '../../shared/orderline-summary';
import { PeriodDataService } from '../../../period/shared/period-data.service';
import { Period } from '../../../period/shared/period.model';
import { PeriodFilterService } from '../../components/period-filter.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Observable<Order[]>;
  orderlines: Observable<Orderline[]>;
  summary: Observable<OrderlineSummary[]>;
  selectedStartDate: Date;
  selectedEndDate: Date;

  constructor(
    private orderDataService: OrderDataService,
    private orderlineDataService: OrderlineDataService,
    public periodDataService: PeriodDataService,
    private periodFilterService: PeriodFilterService
  ) {}

  ngOnInit() {
    forkJoin(
      this.periodFilterService.startDate$,
      this.periodFilterService.endDate$
    ).pipe(
      map(([first, second]) => {
        console.log({ first, second });
      })
    );

    this.orders = this.orderDataService
      .list(new OrderQueryOptions())
      .pipe(map(x => x.body));

    this.orderlines = this.orderlineDataService
      .list(new OrderlineQueryOptions())
      .pipe(map(x => x.body));

    this.summary = this.orderlineDataService.summary().pipe(map(x => x.body));
  }
}
