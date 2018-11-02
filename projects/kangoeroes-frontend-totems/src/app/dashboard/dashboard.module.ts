import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { TotemanimalSharedModule } from '../totemanimal/shared/totemanimal-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    TotemanimalSharedModule
  ],
  declarations: [AppDashboardComponent]
})
export class DashboardModule { }
