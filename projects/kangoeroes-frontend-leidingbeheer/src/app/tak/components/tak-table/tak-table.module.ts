import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakTableComponent } from './tak-table.component';
import { MatTableModule, MatProgressSpinnerModule, MatCheckboxModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { KangoeroeDataTableModule } from 'projects/kangoeroes-frontend-core/src/lib/data-table/data-table.module';

@NgModule({
  declarations: [TakTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule,
    KangoeroeDataTableModule
  ],
  exports: [TakTableComponent]
})
export class TakTableModule { }
