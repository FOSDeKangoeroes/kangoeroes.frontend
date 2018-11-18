import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Adjective } from './adjective.model';
import { AdjectiveSerializer } from './adjective-serializer';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { TotemAdjectiveModule } from '../totemadjective.module';

@Injectable({
  providedIn: TotemAdjectiveModule
})
export class TotemAdjectiveDataService extends ResourceService<Adjective> {

  constructor(httpClient: HttpClient, configService: ConfigService) {
    const config = configService.get();
    const appUrl = `${config.appUrl}/api`;
    super(
      httpClient,
      appUrl,
      'adjectief',
      new AdjectiveSerializer()
    );
  }
}
