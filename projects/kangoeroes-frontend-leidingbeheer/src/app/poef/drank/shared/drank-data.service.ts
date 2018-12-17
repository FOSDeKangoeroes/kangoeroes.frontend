import { Injectable } from '@angular/core';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';

import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { DrankSerializer } from './drank-serializer';
import { Drank } from './drank.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrankDataService extends ResourceService<Drank> {

  constructor(
    httpClient: HttpClient,
    configService: ConfigService) {
      const url = `${configService.get().appUrl}/api`;
      super(httpClient, url, 'drank', new DrankSerializer());
    }
}
