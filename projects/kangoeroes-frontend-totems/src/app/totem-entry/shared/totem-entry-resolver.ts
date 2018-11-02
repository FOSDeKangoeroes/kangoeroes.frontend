import { Injectable } from '@angular/core';
import { TotemEntry } from './totem-entry-model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TotemEntryDataService } from './totem-entry-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotemEntryResolver implements Resolve<TotemEntry> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TotemEntry>  {
    return this.totemEntryDataService.read(route.params['id']);
  }

  constructor(private totemEntryDataService: TotemEntryDataService) { }

}
