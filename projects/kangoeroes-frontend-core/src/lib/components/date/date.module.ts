import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatFormFieldModule, MatDatepickerModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [DatePickerComponent]
})
export class DateModule { }
