import { Observable } from 'rxjs';
import { TotemEntrySerializer } from './totem-entry-serializer';
import { Injectable } from '@angular/core';
import { TotemEntry } from './totem-entry-model';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../core/data-services/resource-service';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TotemEntryDataService extends ResourceService<TotemEntry> {
  appUrl = `${environment.appUrl}/api`;
  resource = 'totementry';
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      `${environment.appUrl}/api`,
      'totementry',
      new TotemEntrySerializer()
    );
  }

  descendants(entryId: number): Observable<TotemEntry[]> {

    return this.httpClient
      .get<TotemEntry[]>(
        `${this.appUrl}/${this.resource}/${entryId}/descendants`
      )
      .pipe(
        map(data => {
          const entries = data.map(item => this.serializer.fromJson(item));
          return entries;
        })
      );
  }

  parent(parentId: number, descendantId: number): Observable<TotemEntry> {
    return this.httpClient
      .post<TotemEntry>(
        `${this.appUrl}/${this.resource}/${descendantId}/parent/${parentId}`, null
      )
      .pipe(
        map(data => {
         return this.serializer.fromJson(data);
        })
      );
  }
}
