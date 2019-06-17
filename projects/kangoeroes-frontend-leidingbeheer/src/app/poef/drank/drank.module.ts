import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrankRoutingModule } from './drank-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
  entryComponents: [DrankAddComponent],
  exports: [DrankTableComponent]
})
export class DrankModule { }
