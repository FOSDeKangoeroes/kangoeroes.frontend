import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakModule } from '../tak/tak.module';
import { LeidingListComponent } from './leiding-list/leiding-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule, MatSortModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeidingAddComponent } from './leiding-add/leiding-add.component';
import { DataService } from '../data.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LeidingListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  providers: [DataService],
  declarations: [LeidingListComponent, LeidingAddComponent],
  entryComponents: [LeidingAddComponent]
})
export class LeidingModule { }
