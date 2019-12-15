import { TakSerializer } from './tak-serializer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { Tak } from './tak.model';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class TakDataService extends ResourceService<Tak> {

  constructor(httpClient: HttpClient, configService: ConfigService) {

    const url = `${configService.get().appUrl}/api`;
    super(httpClient, url, 'tak', new TakSerializer());
   }
}
