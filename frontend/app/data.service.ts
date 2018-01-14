import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Tak } from './tak/tak.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Leiding } from './leiding/leiding.model';
import { LeidingModule } from './leiding/leiding.module';



@Injectable()
export class DataService {

  private _takUrl = '/api/tak';
  private _leidingUrl = '/api/leiding';

  constructor(private http: Http) { }


  get takken(): Observable<Tak[]> {
    return this.http.get(this._takUrl).map(response =>
      response.json().result.map(item => Tak.fromJSON(item))
    );
  }

  getTak(id): Observable<Tak> {
    return this.http.get(`${this._takUrl}/${id}`)
      .map(response => response.json().result).map(item => Tak.fromJSON(item));
  }

  getLeidingForTak(id): Observable<Leiding[]> {
    return this.http.get(`${this._takUrl}/${id}/leiding`)
      .map(response =>
        response.json().result.map(item => Leiding.fromJSON(item)));
  }

  getLeidingForId(id): Observable<Leiding> {
    return this.http.get(`${this._leidingUrl}/${id}`)
      .map(response => response.json().result).map(item => Leiding.fromJSON(item));
  }

  updateTak(tak: Tak, takId: number): Observable<boolean> {
   return this.http.put(`${this._takUrl}/${takId}`, tak.toJSON()).map(response => response.json()).map(item => {
      const updatedTak = Tak.fromJSON(item);
      if (updatedTak) {
        return true;
      } else {
        return false;
      }
    });
  }

  deleteTak(id: number): Observable<boolean> {
    return this.http.delete(`${this._takUrl}/${id}`).map(response => response.json()).map(item => {
      const deletedTak = Tak.fromJSON(item);
      if ( deletedTak) {
        return true;
      } else {
        return false;
      }
    });
  }

  addTak(tak: Tak): Observable<Tak> {
    return this.http.post(this._takUrl, tak.toJSON()).map(response => response.json().result).map(item => {
      const newTak = Tak.fromJSON(item);
      return newTak;
    });
  }

  addLeiding(leiding: Leiding): Observable<Leiding> {
    return this.http.post(this._leidingUrl, leiding.toJSON()).map(response => response.json()).map(item => Leiding.fromJSON(item));
  }

  getLeiding(): Observable<Leiding[]> {
    return this.http.get(this._leidingUrl)
      .map(response =>
        response.json().result.map(item => Leiding.fromJSON(item))
      );
  }
  }

