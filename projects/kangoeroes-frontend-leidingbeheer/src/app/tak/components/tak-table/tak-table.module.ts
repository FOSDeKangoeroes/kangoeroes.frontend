import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakTableComponent } from './tak-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
