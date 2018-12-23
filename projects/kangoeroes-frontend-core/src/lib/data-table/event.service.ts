import { Injectable, EventEmitter } from '@angular/core';
import { KangoeroeDataTableModule } from './data-table.module';

@Injectable({
  providedIn: KangoeroeDataTableModule
})
export class EventService {

  entryChanged$ = new EventEmitter<any>();
  constructor() { }
}
