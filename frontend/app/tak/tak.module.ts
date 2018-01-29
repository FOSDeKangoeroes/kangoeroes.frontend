import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakComponent } from './tak/tak.component';
import { RouterModule, Routes } from '@angular/router';
import { TakListComponent } from './tak-list/tak-list.component';
import { DataService } from '../data.service';
import { HttpModule } from '@angular/http';
import { LeidingModule } from '../leiding/leiding.module';
import { TakDetailComponent } from './tak-detail/tak-detail.component';
import { TakResolverService } from './tak-resolver.service';
import {MatTableModule} from '@angular/material';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PopoverModule} from 'ngx-bootstrap/popover';
import { ReactiveFormsModule } from '@angular/forms';
import { TakEditComponent } from './tak-edit/tak-edit.component';
import { TakDeleteComponent } from './tak-delete/tak-delete.component';
import { TakLeidingAddComponent } from './tak-leiding-add/tak-leiding-add.component';
import { TakAddComponent } from './tak-add/tak-add.component';
import { LeidingTableService } from '../leiding/leiding-table.service';

import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { EventService } from '../shared/event.service';
 

const routes: Routes = [
  {
    path: '',
    component: TakListComponent
  },
  {
    path: ':id',
    component: TakDetailComponent,
    resolve: {tak: TakResolverService},
    data: {
      title: 'Takdetail'
    }
  }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    SharedModule
  ],
  providers: [
    DataService,
    TakResolverService,
    LeidingTableService,
    EventService
  ],
  declarations: [
    TakComponent,
    TakListComponent,
    TakDetailComponent,
    TakEditComponent,
    TakDeleteComponent,
    TakLeidingAddComponent,
    TakAddComponent],
  entryComponents:
  [TakEditComponent,
    TakDeleteComponent,
    TakLeidingAddComponent,
  TakAddComponent
]
})
export class TakModule { }
