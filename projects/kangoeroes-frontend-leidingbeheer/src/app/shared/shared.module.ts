import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatPaginatorModule } from '@angular/material';
import { LeidingTableService } from '../leiding/shared/leiding-table.service';
import { RouterModule } from '@angular/router';
import { TakTableComponent } from './tak-table/tak-table.component';
import { TakTableService } from '../tak/shared/tak-table.service';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    RouterModule
  ],
  providers: [LeidingTableService, TakTableService],
  declarations: [TakTableComponent],
  exports: [TakTableComponent]
})
export class SharedModule { }
