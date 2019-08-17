import { Injectable } from '@angular/core';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';

import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { DrankSerializer } from './drank-serializer';
import { Drank } from './drank.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prijs } from './prijs.model';

@Injectable({
  providedIn: 'root'
})
export class DrankDataService extends ResourceService<Drank> {

  configService: ConfigService;
  constructor(
    httpClient: HttpClient,
    configService: ConfigService) {
      const url = `${configService.get().appUrl}/api`;
      super(httpClient, url, 'drank', new DrankSerializer());

      this.configService = configService;
    }

   public listPrices(drankId: number): Observable<Prijs[]> {
      const url = `${this.configService.get().appUrl}/api/drank/${drankId}/price`;
      return this.httpClient.get<Prijs[]>(url);
    }
}
