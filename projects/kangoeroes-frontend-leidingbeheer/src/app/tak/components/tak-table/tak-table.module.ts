import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakTableComponent } from './tak-table.component';
import { MatTableModule, MatProgressSpinnerModule, MatCheckboxModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TakTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [TakTableComponent]
})
export class TakTableModule { }
