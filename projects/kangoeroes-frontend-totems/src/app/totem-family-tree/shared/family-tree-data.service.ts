import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeTotemEntry } from './tree-totem-entry';

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeDataService {
private appUrl = environment.appUrl;
  constructor(private httpClient: HttpClient) { }

  tree(): Observable<TreeTotemEntry[]> {
    return this.httpClient.get<TreeTotemEntry[]>(`${this.appUrl}/api/totementry/tree`);
  }
}
