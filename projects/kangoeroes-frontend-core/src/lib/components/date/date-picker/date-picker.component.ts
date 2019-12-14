import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'kng-core-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() _dateValue;

  @Input() title: string;

  get dateValue() {
    return moment(this._dateValue, 'YYYY/MM/DD');
  }

  set dateValue(val) {
    this._dateValue = moment(val).format('YYYY/MM/DD');
    this.propagateChange(this._dateValue);
  }

  constructor() {}

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateValue = moment(event.value, 'YYYY/MM/DD');
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.dateValue = moment(obj, 'YYYY/MM/DD');
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  propagateChange = (_: any) => {};
}
