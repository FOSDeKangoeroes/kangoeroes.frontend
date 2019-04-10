import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeidingAddComponent } from './leiding-add/leiding-add.component';
import { MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeidingEditComponent } from './leiding-edit/leiding-edit.component';
import { DynamicFormModule } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [LeidingAddComponent, LeidingEditComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    DynamicFormModule
  ],
  exports: [LeidingEditComponent],
  entryComponents: [LeidingAddComponent]
})
export class LeidingModule {}
