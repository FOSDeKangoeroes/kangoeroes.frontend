import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { LeidingTableService } from '../leiding/leiding-table.service';
import { LeidingTableComponent } from './leiding-table/leiding-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatInputModule,
    RouterModule
  ],
  providers: [LeidingTableService],
  declarations: [LeidingTableComponent],
  exports: [LeidingTableComponent]
})
export class SharedModule { }
