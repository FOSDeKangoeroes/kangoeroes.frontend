import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Leiding } from './leiding.model';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';

@Injectable()
export class LeidingResolverService implements Resolve<Leiding> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Leiding> {
    return this.dataService.getLeidingForId(route.params['id']);
  }

  constructor(private dataService: DataService) { }


}
