import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeidingAddComponent } from './leiding-add/leiding-add.component';
import { MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeidingAddComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [],
  entryComponents: [LeidingAddComponent]
})
export class LeidingModule {}
