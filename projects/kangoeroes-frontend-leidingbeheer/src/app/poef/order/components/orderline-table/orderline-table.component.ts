import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderline } from '../../shared/orderline.model';
import { GridApi, ColumnApi, Module } from 'ag-grid-community';
import { CurrencyRenderer } from '../currency-renderer/currency-renderer.component';

@Component({
  selector: 'app-orderline-table',
  templateUrl: './orderline-table.component.html',
  styleUrls: ['./orderline-table.component.scss']
})
export class OrderlineTableComponent implements OnInit {
  @Input() orderlines: Observable<Orderline[]>;

  columns = [
    { headerName: 'ID', field: 'displayName' },
    { headerName: 'Besteld voor', field: 'orderedFor' },
    { headerName: 'Drank', field: 'drankNaam' },
    { headerName: 'Aantal', field: 'quantity' },
    {
      headerName: 'Totale kost',
      field: 'priceTotal',
      cellRenderer: 'currencyRenderer'
    },
    { headerName: 'Besteld op', field: 'orderCreatedOn' }
  ];


  public frameworkComponents;


  constructor() {
    this.frameworkComponents = {
      currencyRenderer: CurrencyRenderer
    };
  }

  ngOnInit() {}

}
