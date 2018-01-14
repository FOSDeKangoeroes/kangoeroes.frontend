import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tak } from './tak.model';

@Injectable()
export class TakTableService {

  private _tableData: Observable<Tak[]>;
  // Nog om te vormen naar observable
  private _displayedColumns: string[];
  constructor() { }

  set tableData(data: Observable<Tak[]>) {
    this._tableData = data;
  }

  get tableData(): Observable<Tak[]> {
    return this._tableData;
  }

  set displayedColumns(columns: string[]) {
    this._displayedColumns = columns;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

}
