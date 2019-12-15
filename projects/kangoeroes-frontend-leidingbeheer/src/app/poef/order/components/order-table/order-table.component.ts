import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../shared/order.model';
import { CurrencyRenderer } from '../currency-renderer/currency-renderer.component';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  @Input() orders: Observable<Order[]>;
  public frameworkComponents;

  columns = [
    { headerName: 'ID', field: 'displayName' },
    { headerName: 'Besteller', field: 'orderedByNaam' },
    {
      headerName: 'Prijs',
      field: 'orderPrice',
      cellRenderer: 'currencyRenderer'
    },
    { headerName: 'Datum', field: 'createdOn' }
  ];

  constructor() {
    this.frameworkComponents = {
      currencyRenderer: CurrencyRenderer
    };
  }

  ngOnInit() {}
}
