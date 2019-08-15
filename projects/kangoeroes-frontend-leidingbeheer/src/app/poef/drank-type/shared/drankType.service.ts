import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DrankType } from './drank-type-model';

@Injectable({
  providedIn: 'root'
})
export class DrankTypeService {

  constructor() { }

  activeDrankType$ = new Subject<DrankType>();
}
