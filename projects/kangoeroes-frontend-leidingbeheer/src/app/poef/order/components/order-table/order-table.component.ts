import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() orders: Observable<Order[]>;

  columns = [
    {headerName: 'ID', field: 'displayName'},
    {headerName: 'Besteller', field: 'orderedByNaam'},
    {headerName: 'Prijs', field: 'orderPrice'},
    {headerName: 'Datum', field: 'createdOn'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
