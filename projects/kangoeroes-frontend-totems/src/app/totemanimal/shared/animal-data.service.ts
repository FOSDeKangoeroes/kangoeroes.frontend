import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal.model';

import { AnimalSerializer } from './animal-serializer';
import { environment } from '../../../environments/environment';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/resource-service';

@Injectable({
  providedIn: 'root'
})
export class AnimalDataService extends ResourceService<Animal> {

  constructor(httpClient: HttpClient) {
    const appUrl = `${environment.appUrl}/api`;
    super(
      httpClient,
      appUrl,
      'totem',
      new AnimalSerializer()
    );
  }
}
