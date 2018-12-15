import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
// Service voor het doorgeven van een zoekopdracht naar de component
// verantwoordelijk voor het verwerken van de zoekopdracht.
// Dient niet aangeleverd to worden in de Module, maar in de parent component.
export class SearchBarService {

  constructor() { }

  private searchStringSource = new BehaviorSubject<string>('');

  searchString$ = this.searchStringSource.asObservable();

  applySearchString(searchString: string) {
    this.searchStringSource.next(searchString);
  }
}
