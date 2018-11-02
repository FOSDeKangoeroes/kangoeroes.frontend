import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  constructor() {}

  setDisplayedColumns(key: string, columns: string[]) {
    localStorage.setItem(key, JSON.stringify(columns));
  }

  getDisplayedColumns(key: string): string[] {
    return JSON.parse(localStorage.getItem(key));
  }

  itemIsInStorage(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
