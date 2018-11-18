import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal.model';

import { AnimalSerializer } from './animal-serializer';
import { environment } from '../../../environments/environment';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalDataService extends ResourceService<Animal> {

  constructor(httpClient: HttpClient, configService: ConfigService) {
    const config = configService.get();
    const appUrl = `${config.appUrl}/api`;
    super(
      httpClient,
      appUrl,
      'totem',
      new AnimalSerializer()
    );
  }
}
