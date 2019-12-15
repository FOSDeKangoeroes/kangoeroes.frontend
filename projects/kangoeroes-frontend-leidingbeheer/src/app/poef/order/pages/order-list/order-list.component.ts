import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../shared/order-data.service';
import { Observable } from 'rxjs';
import { Order } from '../../shared/order.model';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(private orderDataService: OrderDataService) { }

  ngOnInit() {
    this.orders = this.orderDataService.list(new QueryOptions()).pipe(map(x => x.body));
  }

}
