import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Leiding } from './leiding.model';

@Injectable()
export class LeidingTableService {

  private _takId: number;
  // Nog om te vormen naar observable
  private _displayedColumns: string[];
  constructor() { }

  set takId(id: number) {
    this._takId = id;
  }

  get takId(): number {
    return this._takId;
  }

  set displayedColumns(columns: string[]) {
    this._displayedColumns = columns;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }
}
