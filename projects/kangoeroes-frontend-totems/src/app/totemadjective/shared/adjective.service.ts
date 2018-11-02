import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AdjectiveService {

  adjectiveChanged$ = new BehaviorSubject<any>(null);
  newAdjective$ = new EventEmitter<any>();
  constructor() { }
}
