import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrankRoutingModule } from './drank-routing.module';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { SearchBarModule } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.module';
import { DrankTableComponent } from './components/drank-table/drank-table.component';
import { DrankListComponent } from './pages/drank-list/drank-list.component';
import { KangoeroeDataTableModule } from 'projects/kangoeroes-frontend-core/src/lib/data-table/data-table.module';

@NgModule({
  declarations: [DrankListComponent, DrankTableComponent],
  imports: [
    CommonModule,
    DrankRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SearchBarModule,
    KangoeroeDataTableModule
  ]
})
export class DrankModule { }
