import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title$ = new BehaviorSubject<string>('');

  constructor(private title: Title) { }

  setTitle(title: string) {
    this.title$.next(title);
    this.title.setTitle(`${title} | Totemdatabank`);
  }
}
