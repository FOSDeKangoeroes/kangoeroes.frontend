import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatPaginatorModule } from '@angular/material';
import { LeidingTableService } from '../leiding/leiding-table.service';
import { LeidingTableComponent } from './leiding-table/leiding-table.component';
import { RouterModule } from '@angular/router';
import { TakTableComponent } from './tak-table/tak-table.component';
import { TakTableService } from '../tak/tak-table.service';

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
  declarations: [LeidingTableComponent, TakTableComponent],
  exports: [LeidingTableComponent, TakTableComponent]
})
export class SharedModule { }
