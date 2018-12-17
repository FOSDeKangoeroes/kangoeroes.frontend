import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrankTypeRoutingModule } from './drank-type-routing.module';
import { DrankTypeListComponent } from './pages/drank-type-list/drank-type-list.component';

@NgModule({
  declarations: [DrankTypeListComponent],
  imports: [
    CommonModule,
    DrankTypeRoutingModule
  ]
})
export class DrankTypeModule { }
