import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal.model';
import { ResourceService } from '../../core/data-services/resource-service';
import { AnimalSerializer } from './animal-serializer';
import { environment } from '../../../environments/environment';

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
