import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakModule } from '../tak/tak.module';
import { LeidingListComponent } from './leiding-list/leiding-list.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeidingAddComponent } from './leiding-add/leiding-add.component';
import { DataService } from '../data.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LeidingDetailComponent } from './leiding-detail/leiding-detail.component';
import { LeidingResolverService } from './leiding-resolver.service';
import { LeidingTableService } from './leiding-table.service';
import { SharedModule } from '../shared/shared.module';
import { LeidingChangeTakComponent } from './leiding-change-tak/leiding-change-tak.component';
import { LeidingEditComponent } from './leiding-edit/leiding-edit.component';
import { LeidingEditRolesComponent } from './leiding-edit-roles/leiding-edit-roles.component';
import { MatCheckboxModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: LeidingListComponent
  },
  {
    path: ':id',
    component: LeidingDetailComponent,
    resolve: {leiding: LeidingResolverService}
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    SharedModule,
    MatCheckboxModule
  ],
  providers: [DataService, LeidingResolverService, LeidingTableService],
  declarations: [LeidingListComponent,
    LeidingAddComponent,
    LeidingDetailComponent,
    LeidingChangeTakComponent,
    LeidingEditComponent,
    LeidingEditRolesComponent],
  entryComponents: [LeidingAddComponent, LeidingChangeTakComponent, LeidingEditComponent, LeidingEditRolesComponent]
})
export class LeidingModule { }
