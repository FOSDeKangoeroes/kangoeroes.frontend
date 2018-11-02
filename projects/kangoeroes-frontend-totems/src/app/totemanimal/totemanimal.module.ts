import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotemAnimalRoutingModule } from './totemanimal-routing.module';
import { AnimalsComponent } from './pages/animals/animals.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatSnackBarModule,
  MatDialogModule} from '@angular/material';
import { DierenTableComponent } from './components/dieren-table/dieren-table.component';
import { TotemanimalAddComponent } from './components/totemanimal-add/totemanimal-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TotemanimalSharedModule } from './shared/totemanimal-shared.module';
import { PickColumnModule } from '../ui/pick-column/pick-column.module';

import { TotemanimalEditComponent } from './components/totemanimal-edit/totemanimal-edit.component';

@NgModule({
  imports: [
    CommonModule,
    TotemAnimalRoutingModule,
    TotemanimalSharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    PickColumnModule,
    MatDialogModule,
    ReactiveFormsModule,
    PickColumnModule
  ],
  declarations: [AnimalsComponent, TotemanimalEditComponent],
  entryComponents: [TotemanimalEditComponent]
})
export class TotemAnimalModule { }
