import { Serializer } from './serializer';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from './resource-model';
import { QueryOptions } from './query-options';
import { map } from 'rxjs/operators';


export abstract class ResourceService<T extends Resource> {
  constructor(
    protected httpClient: HttpClient,
    protected url: string,
    protected endpoint: string,
    protected serializer: Serializer<T>
  ) {}

  create(item): Observable<T> {
    return this.httpClient.post<T>(`${this.url}/${this.endpoint}`, item).pipe(map(data => this.serializer.fromJson(data) as T));
  }

  update(item, id: number): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${id}`, item)
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  list(queryOptions: QueryOptions): Observable<HttpResponse<T[]>> {
    return this.httpClient
      .get<T[]>(
        `${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`,
        { observe: 'response' }
      ).pipe(map((data => {
        const leiding = data.body.map(item => this.serializer.fromJson(item));
       const newData = data.clone({
         headers: data.headers,
         body: leiding
       });
        return newData;
      })));
  }

  delete(id: number): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}/${this.endpoint}/${id}`);
  }

}
