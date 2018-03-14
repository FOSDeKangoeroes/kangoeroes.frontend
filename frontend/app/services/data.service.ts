import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpParams, HttpClient, HttpResponse } from '@angular/common/http';
import { Tak } from '../tak/tak.model';
import { Leiding } from '../leiding/leiding.model';






@Injectable()
export class DataService {

  private _takUrl = 'http://localhost:4200/api/tak';
  private _leidingUrl = 'http://localhost:4200/api/leiding';

  constructor(private httpClient: HttpClient) { }


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
    const takJson = tak;
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
    return this.httpClient.post<Leiding>(this._leidingUrl, leiding.toJSON());
  }

  getLeiding(sortBy = '', sortOrder = 'asc', query = ' ', takId: number = 0 ): Observable<Leiding[]> {
    return this.httpClient.get<Leiding[]>(`${this._leidingUrl}?sortBy=${sortBy}&sortOrder=${sortOrder}&query=${query}&tak=${takId}`);
  }

  updateLeiding(leiding): Observable<Leiding> {
    return this.httpClient.
    put<Leiding>(`${this._leidingUrl}/${leiding.id}`, leiding);
  }

  changeTakForLeiding(leidingId, newTakId: number): Observable<Leiding> {
    return this.httpClient.put<Leiding>(`${this._leidingUrl}/${leidingId}/tak`, {newTakId: newTakId});
  }

  createUser(leidingId): Observable<Leiding> {
    return this.httpClient.post<Leiding>(`${this._leidingUrl}/${leidingId}/user`, null);
  }

  getRolesForUser(id) {
    return this.httpClient.get<Role[]>(`${this._leidingUrl}/${id}/roles`);
  }

  removeRoleForUser(leidingId, roleId): Observable<HttpResponse<any>> {
  return  this.httpClient.delete<HttpResponse<any>>(`${this._leidingUrl}/${leidingId}/roles/${roleId}`);
  }

  addRoleForUser(leidingId, roleId): Observable<HttpResponse<any>> {
    return this.httpClient.patch<HttpResponse<any>>(`${this._leidingUrl}/${leidingId}/roles/${roleId}`, null);
  }
  }

