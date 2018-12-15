import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakService {
    entryChanged$ = new EventEmitter<any>();

  constructor() { }
}
