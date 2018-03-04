import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Tak } from './tak/tak.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Leiding } from './leiding/leiding.model';
import { LeidingModule } from './leiding/leiding.module';
import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpInterceptor } from './http-interceptor';




@Injectable()
export class DataService {

  private _takUrl = 'http://localhost:4200/api/tak';
  private _leidingUrl = 'http://localhost:4200/api/leiding';

  constructor(private http: Http, private httpClient: HttpClient) { }


  getTakken(sortBy: string = '', sortOrder: string = 'asc', query: string = ''): Observable<Tak[]> {
    return this.httpClient.get<Tak[]>(`${this._takUrl}?sortBy=${sortBy}&sortOrder=${sortOrder}&query=${query}`);
    // .map(response => response.json().result.map(item => Tak.fromJSON(item)));
  }

  getTak(id): Observable<Tak> {
    return this.httpClient.get<Tak>(`${this._takUrl}/${id}`);
      // .map(response => response.json().result).map(item => Tak.fromJSON(item));
  }

  getLeidingForTak(id): Observable<Leiding[]> {
    return this.httpClient.get<Leiding[]>(`${this._takUrl}/${id}/leiding`);
      // .map(response =>
       // response.json().result.map(item => Leiding.fromJSON(item)));
  }

  getLeidingForId(id): Observable<Leiding> {
    return this.httpClient.get<Leiding>(`${this._leidingUrl}/${id}`);
    //  .map(response => response.json().result).map(item => Leiding.fromJSON(item));
  }

  updateTak(tak: Tak, takId: number): Observable<Tak> {
    const takJson = tak.toJSON();
   return this.httpClient.put<Tak>(`${this._takUrl}/${takId}`, takJson);

  }

  deleteTak(id: number): Observable<boolean> {
    return this.httpClient.delete<Tak>(`${this._takUrl}/${id}`).map(res => {
      if (res) {
        return true;
      }
      return false;
    });

  }

  addTak(tak: Tak): Observable<Tak> {
    return this.httpClient.post<Tak>(this._takUrl, tak.toJSON());
  }

  addLeiding(leiding: Leiding): Observable<Leiding> {
    return this.http.post(this._leidingUrl, leiding.toJSON()).map(response => response.json().result).map(item => Leiding.fromJSON(item));
  }

  getLeiding(sortBy = '', sortOrder = 'asc', query = ' ', takId: number = 0 ): Observable<Leiding[]> {
    return this.http.get(`${this._leidingUrl}?sortBy=${sortBy}&sortOrder=${sortOrder}&query=${query}&tak=${takId}`)
      .map(response =>
        response.json().result.map(item => Leiding.fromJSON(item))
      );
  }

  updateLeiding(leiding): Observable<Leiding> {
    return this.http.
    put(`${this._leidingUrl}/${leiding.id}`, leiding.toJSON())
    .map(response => response.json().result)
    .map(item => Leiding.fromJSON(item));
  }

  changeTakForLeiding(leidingId, newTakId: number): Observable<Leiding> {
    return this.http.put(`${this._leidingUrl}/${leidingId}/tak`, {newTakId: newTakId}).map(res => res.json().result)
    .map(item => {
     return Leiding.fromJSON(item);
    });
  }

  createUser(leidingId): Observable<Leiding> {
    return this.http.post(`${this._leidingUrl}/${leidingId}/user`, null).map(res => res.json().result).map(item => {
      return Leiding.fromJSON(item);
    });
  }
  }

