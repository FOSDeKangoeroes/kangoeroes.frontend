import { Observable } from 'rxjs';
import { TotemEntrySerializer } from './totem-entry-serializer';
import { Injectable } from '@angular/core';
import { TotemEntry } from './totem-entry-model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { Config } from 'projects/kangoeroes-frontend-core/src/lib/config/config';

@Injectable({
  providedIn: 'root'
})
export class TotemEntryDataService extends ResourceService<TotemEntry> {
  resource: string;
  config: Config;
  private fullUrl: string;
  constructor(httpClient: HttpClient, configService: ConfigService) {
    const config = configService.get();
    const url = `${config.appUrl}/api`;
    super(httpClient, url, 'totementry', new TotemEntrySerializer());

    this.resource = 'totementry';
    this.config = config;
    this.fullUrl = url;
  }

  descendants(entryId: number): Observable<TotemEntry[]> {
    return this.httpClient
      .get<TotemEntry[]>(
        `${this.fullUrl}/${
          this.resource
        }/${entryId}/descendants`
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
      `${this.fullUrl}/${this.resource}/${descendantId}/parent/${parentId}`,
        null
      )
      .pipe(
        map(data => {
          return this.serializer.fromJson(data);
        })
      );
  }
}
