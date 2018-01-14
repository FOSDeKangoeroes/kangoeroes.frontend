import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Leiding } from './leiding.model';
import { LeidingDataSource } from '../tak/tak-detail/tak-detail.component';

@Injectable()
export class LeidingTableService {

  private _tableData: Observable<Leiding[]>;
  // Nog om te vormen naar observable
  private _displayedColumns: string[];
  constructor() { }

  set tableData(data: Observable<Leiding[]>) {
    this._tableData = data;
  }

  get tableData(): Observable<Leiding[]> {
    return this._tableData;
  }

  set displayedColumns(columns: string[]) {
    this._displayedColumns = columns;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }
}
