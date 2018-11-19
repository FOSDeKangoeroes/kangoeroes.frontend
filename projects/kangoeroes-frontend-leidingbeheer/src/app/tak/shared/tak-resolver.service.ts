import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Tak } from './tak.model';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TakResolverService implements Resolve<Tak> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tak>  {
    return this.dataService.getTak(route.params['id']);
  }

  constructor(private dataService: DataService) { }

}
