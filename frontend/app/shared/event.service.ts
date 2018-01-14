import { Injectable, EventEmitter } from '@angular/core';
import { Tak } from '../tak/tak.model';


@Injectable()
export class EventService {

   $newTak = new EventEmitter<Tak>();

  public newTak(tak: Tak) {
    this.$newTak.emit(tak);
  }
  constructor() { }

}
