import { Injectable, EventEmitter } from '@angular/core';
import { Tak } from '../tak/tak.model';
import { Leiding } from '../leiding/leiding.model';


@Injectable()
export class EventService {

   $newTak = new EventEmitter<Tak>();

   $newLeiding = new EventEmitter<Leiding>();

  public newTak(tak: Tak) {
    this.$newTak.emit(tak);
  }

  public newLeiding(leiding: Leiding) {
    this.$newLeiding.emit(leiding);
  }
  constructor() { }

}
