import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectListModule } from 'projects/kangoeroes-frontend-core/src/lib/components/select-list/select-list.module';
import { CreatePeriodComponent } from './components/create-period/create-period.component';
import { DynamicFormModule } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [CreatePeriodComponent],
  imports: [
    CommonModule,
    SelectListModule,
    DynamicFormModule
  ],
  exports: [CreatePeriodComponent],
  entryComponents: [CreatePeriodComponent]
})
export class PeriodModule { }
