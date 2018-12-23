import { Injectable } from '@angular/core';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { DrankType } from './drank-type-model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { DrankTypeSerializer } from './drank-type-serializer';

@Injectable({
  providedIn: 'root'
})
export class DrankTypeDataService extends ResourceService<DrankType> {
  constructor(httpClient: HttpClient, configService: ConfigService) {
    const url = `${configService.get().appUrl}/api`;
    const endpoint = 'dranktype';
    super(httpClient, url, endpoint, new DrankTypeSerializer());
  }
}
