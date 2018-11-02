
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnPickerComponent } from './column-picker/column-picker.component';
import { MatCheckboxModule, MatTableModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { PickColumnDialogComponent } from './totemanimal-pick-column-dialog/pick-column-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [ColumnPickerComponent, PickColumnDialogComponent],
  exports: [ColumnPickerComponent, PickColumnDialogComponent],
  entryComponents: [PickColumnDialogComponent]
})
export class PickColumnModule { }
