import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeTotemEntry } from './tree-totem-entry';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { TotemFamilyTreeModule } from '../totem-family-tree.module';

@Injectable({
  providedIn: TotemFamilyTreeModule
})
export class FamilyTreeDataService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {

   }

  tree(): Observable<TreeTotemEntry[]> {
    return this.httpClient.get<TreeTotemEntry[]>(`${this.configService.get().appUrl}/api/totementry/tree`);
  }
}
