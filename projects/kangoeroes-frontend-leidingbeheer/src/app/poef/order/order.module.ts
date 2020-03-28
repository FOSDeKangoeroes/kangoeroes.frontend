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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutocompleteModule } from 'projects/kangoeroes-frontend-core/src/lib/components/autocomplete/autocomplete.module';
import { PeriodFilterComponent } from './components/period-filter/period-filter.component';
import { CreatePeriodComponent } from '../period/components/create-period/create-period.component';
import { PeriodModule } from '../period/period.module';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderTableComponent,
    OrderlineTableComponent,
    OrderPersonTableComponent,
    CurrencyRenderer,
    PeriodFilterComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTabsModule,
    SelectListModule,
    AgGridModule.withComponents([CurrencyRenderer]),
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    AutocompleteModule
  ]
})
export class OrderModule { }
