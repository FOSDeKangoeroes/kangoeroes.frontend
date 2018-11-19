
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Leiding } from './leiding.model';
import { Observable } from 'rxjs/Observable';
import { LeidingDataService } from './leiding-data.service';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class LeidingResolverService implements Resolve<Leiding> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Leiding> {
    return this.dataService.read(route.params['id']);
  }

  constructor(private dataService: LeidingDataService) { }


}
