import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoefRoutingModule } from './poef-routing.module';
import { DrankModule } from './drank/drank.module';
import { DrankTypeModule } from './drank-type/drank-type.module';
import { CreatePeriodComponent } from './period/components/create-period/create-period.component';
import { PeriodModule } from './period/period.module';

@NgModule({
  imports: [
    CommonModule,
    PoefRoutingModule,
    DrankModule,
    DrankTypeModule,
    PeriodModule
  ],
  entryComponents: [CreatePeriodComponent]
})
export class PoefModule {}
