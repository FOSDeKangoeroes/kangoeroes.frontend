import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../shared/order-data.service';
import { Observable } from 'rxjs';
import { Order } from '../../shared/order.model';
import { map } from 'rxjs/operators';
import { OrderQueryOptions } from '../../shared/order-query-options';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(private orderDataService: OrderDataService) { }

  ngOnInit() {
    this.orders = this.orderDataService.list(new OrderQueryOptions()).pipe(map(x => x.body));
  }

  

}
