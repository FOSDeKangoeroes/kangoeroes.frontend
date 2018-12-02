
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LeidingResolverService } from './shared/leiding-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { LeidingListComponent } from './pages/leiding-list/leiding-list.component';
import { LeidingDetailComponent } from './pages/leiding-detail/leiding-detail.component';
import { LeidingAddComponent } from './components/leiding-add/leiding-add.component';
import { LeidingEditComponent } from './components/leiding-edit/leiding-edit.component';
import { LeidingChangeTakComponent } from './components/leiding-change-tak/leiding-change-tak.component';
import { SelectListModule } from 'projects/kangoeroes-frontend-core/src/lib/components/select-list/select-list.module';


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
    NgSelectModule,
    SelectListModule
  ],
  declarations: [LeidingListComponent,
    LeidingAddComponent,
    LeidingDetailComponent,
    LeidingChangeTakComponent,
    LeidingEditComponent
],
  entryComponents: [
    LeidingAddComponent,
    LeidingChangeTakComponent,
    LeidingEditComponent
]
})
export class LeidingModule { }
