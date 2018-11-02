import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  newAnimal$ = new EventEmitter<any>();
  constructor() { }

}
