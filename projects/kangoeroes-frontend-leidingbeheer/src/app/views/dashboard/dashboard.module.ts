import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
