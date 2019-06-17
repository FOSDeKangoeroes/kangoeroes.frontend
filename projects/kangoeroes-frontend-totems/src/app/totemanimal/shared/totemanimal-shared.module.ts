import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DierenTableComponent } from '../components/dieren-table/dieren-table.component';
import { TotemanimalAddComponent } from '../components/totemanimal-add/totemanimal-add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
