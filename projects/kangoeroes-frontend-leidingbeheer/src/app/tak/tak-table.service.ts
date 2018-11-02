import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tak } from './tak.model';

@Injectable()
export class TakTableService {


  // Nog om te vormen naar observable
  private _displayedColumns: string[];
  constructor() { }


  set displayedColumns(columns: string[]) {
    this._displayedColumns = columns;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

}
