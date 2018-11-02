import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DierenTableComponent } from '../components/dieren-table/dieren-table.component';
import { TotemanimalAddComponent } from '../components/totemanimal-add/totemanimal-add.component';
import {
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [DierenTableComponent, TotemanimalAddComponent],
  exports: [TotemanimalAddComponent, DierenTableComponent]
})
export class TotemanimalSharedModule { }
