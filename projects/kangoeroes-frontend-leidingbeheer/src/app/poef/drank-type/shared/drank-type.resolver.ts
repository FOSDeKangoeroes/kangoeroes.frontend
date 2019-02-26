import { Injectable } from '@angular/core';
import { DrankTypeModule } from '../drank-type.module';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DrankType } from './drank-type-model';
import { Observable } from 'rxjs';
import { DrankTypeDataService } from './drank-type-data.service';

@Injectable({
  providedIn: 'root'
})
export class DrankTypeResolver implements Resolve<DrankType> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DrankType> {
   return this.drankTypeDataService.read(route.params['id']);
  }

  constructor(private drankTypeDataService: DrankTypeDataService) { }
}
