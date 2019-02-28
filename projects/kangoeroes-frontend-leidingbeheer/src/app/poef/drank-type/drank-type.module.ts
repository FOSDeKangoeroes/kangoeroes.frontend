import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrankTypeRoutingModule } from './drank-type-routing.module';
import { DrankTypeListComponent } from './pages/drank-type-list/drank-type-list.component';
import { DrankTypeTableComponent } from './components/drank-type-table/drank-type-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { SearchBarModule } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.module';
import { DrankTypeAddComponent } from './components/drank-type-add/drank-type-add.component';
import { DynamicFormModule } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/dynamic-form.module';
import { DrankTypeDetailComponent } from './pages/drank-type-detail/drank-type-detail.component';
import { DrankModule } from '../drank/drank.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [DrankTypeAddComponent],
  declarations: [DrankTypeListComponent, DrankTypeTableComponent, DrankTypeAddComponent, DrankTypeDetailComponent],
  imports: [
    CommonModule,
    DrankTypeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SearchBarModule,
    DynamicFormModule,
    DrankModule
  ]

})
export class DrankTypeModule { }
