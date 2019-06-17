import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotemAdjectiveRoutingModule } from './totemadjective-routing.module';
import { AdjectivesComponent } from './pages/adjectives/adjectives.component';
import { AdjectiveTableComponent } from './components/adjective-table/adjective-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PickColumnModule } from '../ui/pick-column/pick-column.module';
import { TotemAdjectiveEditComponent } from './components/totem-adjective-edit/totem-adjective-edit.component';
import { TotemAdjectiveAddComponent } from './components/totem-adjective-add/totem-adjective-add.component';


@NgModule({
  imports: [
    CommonModule,
    TotemAdjectiveRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    PickColumnModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [AdjectivesComponent, AdjectiveTableComponent, TotemAdjectiveEditComponent, TotemAdjectiveAddComponent],
  entryComponents: [TotemAdjectiveEditComponent]
})
export class TotemAdjectiveModule { }
