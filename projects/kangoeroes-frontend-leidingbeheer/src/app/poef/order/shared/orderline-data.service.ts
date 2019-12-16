import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { Orderline } from './orderline.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { Injectable } from '@angular/core';
import { OrderlineSerializer } from './orderline-serializer';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { OrderlineQueryOptions } from './orderline-query-options';
import { Observable } from 'rxjs';
import { OrderlineSummary } from './orderline-summary';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderlineDataService extends ResourceService<Orderline> {
  constructor(httpClient: HttpClient, configService: ConfigService) {
    const url = `${configService.get().appUrl}/api`;
    const endpoint = 'orderline';
    super(httpClient, url, endpoint, new OrderlineSerializer());
  }

  summary(
    queryOptions: QueryOptions = new OrderlineQueryOptions()
  ): Observable<HttpResponse<OrderlineSummary[]>> {
    return this.httpClient.get<OrderlineSummary[]>(
      `${this.url}/${this.endpoint}/summary?${queryOptions.toQueryString()}`,
      { observe: 'response' }
    );
  }
}
