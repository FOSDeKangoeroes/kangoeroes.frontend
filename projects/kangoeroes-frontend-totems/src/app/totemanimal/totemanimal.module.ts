import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotemAnimalRoutingModule } from './totemanimal-routing.module';
import { AnimalsComponent } from './pages/animals/animals.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
