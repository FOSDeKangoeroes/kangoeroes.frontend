import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoefRoutingModule } from './poef-routing.module';
import { DrankListComponent } from './drank/pages/drank-list/drank-list.component';
import { DrankTableComponent } from './drank/components/drank-table/drank-table.component';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [DrankListComponent, DrankTableComponent],
  imports: [
    CommonModule,
    PoefRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class PoefModule {}
