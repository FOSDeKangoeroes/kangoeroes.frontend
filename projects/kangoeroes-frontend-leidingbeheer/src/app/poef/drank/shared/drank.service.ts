import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrankService {

  entryChanged$ = new EventEmitter<any>();

  constructor() { }
}
