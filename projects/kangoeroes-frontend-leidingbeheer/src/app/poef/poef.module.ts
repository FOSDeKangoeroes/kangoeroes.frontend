import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoefRoutingModule } from './poef-routing.module';
import { DrankModule } from './drank/drank.module';

@NgModule({
  imports: [
    CommonModule,
    PoefRoutingModule,
    DrankModule
  ]
})
export class PoefModule {}
