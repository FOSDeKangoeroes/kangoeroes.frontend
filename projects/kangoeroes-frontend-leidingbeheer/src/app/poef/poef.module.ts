import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoefRoutingModule } from './poef-routing.module';
import { DrankModule } from './drank/drank.module';
import { DrankTypeModule } from './drank-type/drank-type.module';

@NgModule({
  imports: [
    CommonModule,
    PoefRoutingModule,
    DrankModule,
    DrankTypeModule
  ]
})
export class PoefModule {}
