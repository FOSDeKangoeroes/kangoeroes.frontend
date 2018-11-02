import { ResourceService } from '../../core/data-services/resource-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Adjective } from './adjective.model';
import { AdjectiveSerializer } from './adjective-serializer';

@Injectable({
  providedIn: 'root'
})
export class TotemAdjectiveDataService extends ResourceService<Adjective> {

  constructor(httpClient: HttpClient) {
    const appUrl = `${environment.appUrl}/api`;
    super(
      httpClient,
      appUrl,
      'adjectief',
      new AdjectiveSerializer()
    );
  }
}
