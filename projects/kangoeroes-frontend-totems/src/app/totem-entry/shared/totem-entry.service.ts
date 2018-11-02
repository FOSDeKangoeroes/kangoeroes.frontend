import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TotemEntryService {
  entryChanged$ = new EventEmitter<any>();

  constructor() { }
}
