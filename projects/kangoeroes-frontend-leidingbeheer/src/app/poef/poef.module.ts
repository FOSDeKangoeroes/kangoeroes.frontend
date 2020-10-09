import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoefRoutingModule } from './poef-routing.module';
import { DrankModule } from './drank/drank.module';
import { DrankTypeModule } from './drank-type/drank-type.module';
import { CreatePeriodComponent } from './period/components/create-period/create-period.component';
import { PeriodModule } from './period/period.module';
import { CreateOrderComponent } from './order/components/create-order/create-order.component';
import { OrderModule } from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    PoefRoutingModule,
    DrankModule,
    DrankTypeModule,
    PeriodModule,
    OrderModule
  ],
  entryComponents: [CreatePeriodComponent, CreateOrderComponent]
})
export class PoefModule {}
