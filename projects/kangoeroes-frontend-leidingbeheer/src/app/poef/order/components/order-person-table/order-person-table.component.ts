import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderlineSummary } from '../../shared/orderline-summary';
import { CurrencyRenderer } from '../currency-renderer/currency-renderer.component';

@Component({
  selector: 'app-order-person-table',
  templateUrl: './order-person-table.component.html',
  styleUrls: ['./order-person-table.component.scss']
})
export class OrderPersonTableComponent implements OnInit {

  @Input() summary: Observable<OrderlineSummary[]>;
  public frameworkComponents;

  columns = [
    {headerName: 'Verbruiker ID', field: 'leaderId'},
    {headerName: 'Naam verbruiker', field: 'leader'},
    {headerName: 'Aantal consumpties', field: 'amountOfConsumptions'},
    {headerName: 'Totale kost', field: 'totalCost', cellRenderer: 'currencyRenderer'}
  ];

  constructor() {
     this.frameworkComponents = {
       currencyRenderer: CurrencyRenderer
     };
   }

  ngOnInit() {
  }

}
