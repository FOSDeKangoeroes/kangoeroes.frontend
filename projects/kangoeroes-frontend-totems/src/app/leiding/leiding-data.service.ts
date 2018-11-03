import { environment } from '../../environments/environment';
import { LeidingSerializer } from './leiding-serializer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Leiding } from './leiding.model';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';

@Injectable({
  providedIn: 'root'
})
export class LeidingDataService extends ResourceService<Leiding> {

  constructor(httpClient: HttpClient) {
  const appUrl = `${environment.appUrl}/api`;
    super(httpClient, appUrl, 'leiding', new LeidingSerializer());
  }
}
