import { environment } from '../../environments/environment';
import { LeidingSerializer } from './leiding-serializer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../core/data-services/resource-service';
import { Leiding } from './leiding.model';

@Injectable({
  providedIn: 'root'
})
export class LeidingDataService extends ResourceService<Leiding> {

  constructor(httpClient: HttpClient) {
  const appUrl = `${environment.appUrl}/api`;
    super(httpClient, appUrl, 'leiding', new LeidingSerializer());
  }
}
