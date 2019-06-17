import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { DateComponent } from './components/date/date.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { SelectListModule } from '../components/select-list/select-list.module';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateModule } from '../components/date/date.module';

@NgModule({
  entryComponents: [
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent
  ],
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    SelectListModule,
    DateModule
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
