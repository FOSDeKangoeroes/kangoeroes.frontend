import { SelectListComponent } from './select-list/select-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SelectListComponent],
  exports: [SelectListComponent]
})
export class SelectListModule { }
