import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule } from '@angular/material';
import { DateComponent } from './components/date/date.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';

@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, DateComponent, InputComponent, RadiobuttonComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class DynamicFormModule { }
