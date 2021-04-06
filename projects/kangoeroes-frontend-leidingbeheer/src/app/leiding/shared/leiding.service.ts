import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeidingService {

  entryChanged$ = new EventEmitter<any>();
  leidingLoading$ = new EventEmitter<boolean>(false);

  constructor() { }
}
