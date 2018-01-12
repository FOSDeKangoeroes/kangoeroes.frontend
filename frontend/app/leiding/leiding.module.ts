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
import { LeidingDetailComponent } from './leiding-detail/leiding-detail.component';
import { LeidingResolverService } from './leiding-resolver.service';

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
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  providers: [DataService, LeidingResolverService],
  declarations: [LeidingListComponent, LeidingAddComponent, LeidingDetailComponent],
  entryComponents: [LeidingAddComponent]
})
export class LeidingModule { }
