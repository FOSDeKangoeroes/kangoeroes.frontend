import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrankRoutingModule } from './drank-routing.module';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SearchBarModule } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.module';
import { DrankTableComponent } from './components/drank-table/drank-table.component';
import { DrankListComponent } from './pages/drank-list/drank-list.component';
import { KangoeroeDataTableModule } from 'projects/kangoeroes-frontend-core/src/lib/data-table/data-table.module';
import { DrankAddComponent } from './components/drank-add/drank-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectListModule } from 'projects/kangoeroes-frontend-core/src/lib/components/select-list/select-list.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [DrankListComponent, DrankTableComponent, DrankAddComponent],
  imports: [
    CommonModule,
    DrankRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SearchBarModule,
    KangoeroeDataTableModule,
    ReactiveFormsModule,
    FormsModule,
    SelectListModule,
    MatFormFieldModule,
    MatInputModule,
    ModalModule.forRoot()

  ],
  entryComponents: [DrankAddComponent]
})
export class DrankModule { }
