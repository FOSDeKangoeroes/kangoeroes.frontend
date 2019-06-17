import { NgModule } from '@angular/core';
import { LeidingTableComponent } from './leiding-table/leiding-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
