
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import { TakResolverService } from './shared/tak-resolver.service';
import {MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PopoverModule} from 'ngx-bootstrap/popover';
import { ReactiveFormsModule } from '@angular/forms';



import { SharedModule } from '../shared/shared.module';
import { EventService } from '../shared/event.service';
import { DataService } from '../services/data.service';
import { TakListComponent } from './pages/tak-list/tak-list.component';
import { TakEditComponent } from './components/tak-edit/tak-edit.component';
import { TakDeleteComponent } from './components/tak-delete/tak-delete.component';
import { TakLeidingAddComponent } from './components/tak-leiding-add/tak-leiding-add.component';
import { TakAddComponent } from './components/tak-add/tak-add.component';
import { TakDetailComponent } from './pages/tak-detail/tak-detail.component';

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
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    SharedModule
  ],
  providers: [
    DataService,
    EventService
  ],
  declarations: [
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
