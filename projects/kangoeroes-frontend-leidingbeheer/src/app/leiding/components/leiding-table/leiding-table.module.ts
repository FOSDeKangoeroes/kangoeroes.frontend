import { NgModule } from '@angular/core';
import { LeidingTableComponent } from './leiding-table/leiding-table.component';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LeidingTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [LeidingTableComponent]
})
export class LeidingTableModule {}
