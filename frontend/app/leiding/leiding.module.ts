import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakModule } from '../tak/tak.module';
import { LeidingListComponent } from './leiding-list/leiding-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [LeidingListComponent]
})
export class LeidingModule { }
