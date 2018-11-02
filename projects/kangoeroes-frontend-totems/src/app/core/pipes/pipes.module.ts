import { NoDatePipe } from './no-date.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoDatePipe],
  exports: [NoDatePipe]
})
export class PipesModule { }
