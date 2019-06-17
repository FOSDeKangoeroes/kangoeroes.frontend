
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TakResolverService } from './shared/tak-resolver.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PopoverModule} from 'ngx-bootstrap/popover';
import { ReactiveFormsModule } from '@angular/forms';

import { EventService } from '../shared/event.service';
import { TakListComponent } from './pages/tak-list/tak-list.component';
import { TakEditComponent } from './components/tak-edit/tak-edit.component';
import { TakDeleteComponent } from './components/tak-delete/tak-delete.component';
import { TakLeidingAddComponent } from './components/tak-leiding-add/tak-leiding-add.component';
import { TakAddComponent } from './components/tak-add/tak-add.component';
import { TakDetailComponent } from './pages/tak-detail/tak-detail.component';
import { LeidingTableModule } from '../leiding/components/leiding-table/leiding-table.module';
import { TakTableModule } from './components/tak-table/tak-table.module';
import { SearchBarModule } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.module';

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
    LeidingTableModule,
    TakTableModule,
    SearchBarModule
  ],
  providers: [
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
