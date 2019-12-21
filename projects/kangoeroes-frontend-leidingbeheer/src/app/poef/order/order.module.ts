import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { OrderlineTableComponent } from './components/orderline-table/orderline-table.component';
import { OrderPersonTableComponent } from './components/order-person-table/order-person-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { CurrencyRenderer } from './components/currency-renderer/currency-renderer.component';
import { SelectListModule } from 'projects/kangoeroes-frontend-core/src/lib/components/select-list/select-list.module';

@NgModule({
  declarations: [OrderListComponent, OrderTableComponent, OrderlineTableComponent, OrderPersonTableComponent, CurrencyRenderer],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTabsModule,
    SelectListModule,
    AgGridModule.withComponents([CurrencyRenderer])
  ]
})
export class OrderModule { }
