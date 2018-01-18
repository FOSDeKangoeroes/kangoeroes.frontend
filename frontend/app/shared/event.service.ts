import { Injectable, EventEmitter } from '@angular/core';
import { Tak } from '../tak/tak.model';
import { Leiding } from '../leiding/leiding.model';


@Injectable()
export class EventService {

   $newTak = new EventEmitter<Tak>();

   $newLeiding = new EventEmitter<Leiding>();

   private _activeLeiding: Leiding;
   private _activeTak: Tak;

  public newTak(tak: Tak) {
    this.$newTak.emit(tak);
  }

  public newLeiding(leiding: Leiding) {
    this.$newLeiding.emit(leiding);
  }

  get activeLeiding(): Leiding {
    return this._activeLeiding;
  }

  set activeLeiding(leiding: Leiding) {
    this._activeLeiding = leiding;
  }

  get activeTak(): Tak {
    return this._activeTak;
  }

  set activeTak(tak: Tak) {
    this._activeTak = tak;
  }

  constructor() { }

}
