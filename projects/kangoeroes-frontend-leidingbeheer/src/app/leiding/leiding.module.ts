
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LeidingResolverService } from './shared/leiding-resolver.service';
import { SharedModule } from '../shared/shared.module';

import { MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { DataService } from '../services/data.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { LeidingListComponent } from './pages/leiding-list/leiding-list.component';
import { LeidingDetailComponent } from './pages/leiding-detail/leiding-detail.component';
import { LeidingAddComponent } from './components/leiding-add/leiding-add.component';
import { LeidingEditComponent } from './components/leiding-edit/leiding-edit.component';
import { LeidingEditRolesComponent } from './components/leiding-edit-roles/leiding-edit-roles.component';
import { LeidingManageUserComponent } from './components/leiding-manage-user/leiding-manage-user.component';
import { LeidingChangeTakComponent } from './components/leiding-change-tak/leiding-change-tak.component';


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
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgSelectModule
  ],
  declarations: [LeidingListComponent,
    LeidingAddComponent,
    LeidingDetailComponent,
    LeidingChangeTakComponent,
    LeidingEditComponent,
    LeidingEditRolesComponent,
    LeidingManageUserComponent],
  entryComponents: [
    LeidingAddComponent,
    LeidingChangeTakComponent,
    LeidingEditComponent,
    LeidingEditRolesComponent,
    LeidingManageUserComponent]
})
export class LeidingModule { }
