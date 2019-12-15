import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-currency-cell',
  templateUrl: './currency-renderer.component.html',
  styleUrls: ['./currency-renderer.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class CurrencyRenderer implements ICellRendererAngularComp {
  public params: any;

  refresh(params: any): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

}
