import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../shared/order-data.service';
import { Observable } from 'rxjs';
import { Order } from '../../shared/order.model';
import { map } from 'rxjs/operators';
import { OrderQueryOptions } from '../../shared/order-query-options';
import { OrderlineDataService } from '../../shared/orderline-data.service';
import { Orderline } from '../../shared/orderline.model';
import { OrderlineQueryOptions } from '../../shared/orderline-query-options';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;
  orderlines: Observable<Orderline[]>;

  constructor(private orderDataService: OrderDataService, private orderlineDataService: OrderlineDataService) { }

  ngOnInit() {
    this.orders = this.orderDataService.list(new OrderQueryOptions()).pipe(map(x => x.body));

    this.orderlines = this.orderlineDataService.list(new OrderlineQueryOptions()).pipe(map(x => x.body));
  }

}
