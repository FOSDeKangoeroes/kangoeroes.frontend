import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakComponent } from './tak/tak.component';
import { RouterModule } from '@angular/router';
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


@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    LeidingModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),

  ],
  providers: [
    DataService,
  ],
  declarations: [TakComponent, TakListComponent, TakDetailComponent, TakEditComponent, TakDeleteComponent, TakLeidingAddComponent],
  entryComponents: [TakEditComponent, TakDeleteComponent, TakLeidingAddComponent]
})
export class TakModule { }
