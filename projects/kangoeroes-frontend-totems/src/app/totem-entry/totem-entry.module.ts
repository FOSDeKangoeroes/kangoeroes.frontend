import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PickColumnModule } from '../ui/pick-column/pick-column.module';
import { PipesModule } from '../core/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { TotemEntryRoutingModule } from './totem-entry-routing.module';
import { TotemEntryTableComponent } from './components/totem-entry-table/totem-entry-table.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSnackBarModule
} from '@angular/material';
import { TotemEntriesComponent } from './pages/totem-entries/totem-entries.component';
import { TotemEntryAddComponent } from './components/totem-entry-add/totem-entry-add.component';

import { TotemEntryDetailComponent } from './pages/totem-entry-detail/totem-entry-detail.component';
import { TotemEntryEditComponent } from './components/totem-entry-edit/totem-entry-edit.component';
import { TotemEntryReuseDataComponent } from './components/totem-entry-reuse-data/totem-entry-reuse-data.component';
import { TotemEntryFamilyComponent } from './components/totem-entry-family/totem-entry-family.component';
import { TotemEntryAddDescendantComponent } from './components/totem-entry-add-descendant/totem-entry-add-descendant.component';
import { SelectListModule } from 'projects/kangoeroes-frontend-core/src/lib/components/select-list/select-list.module';
import { AutocompleteModule } from 'projects/kangoeroes-frontend-core/src/lib/components/autocomplete/autocomplete.module';
import { LeidingAddComponent } from '../leiding/leiding-add/leiding-add.component';
import { LeidingModule } from '../leiding/leiding.module';


@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    TotemEntryRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSnackBarModule,
    PickColumnModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    NgSelectModule,
    SelectListModule,
    AutocompleteModule,
    LeidingModule,
    MatDialogModule

  ],
  declarations: [
    TotemEntryTableComponent,
    TotemEntriesComponent,
    TotemEntryAddComponent,
    TotemEntryDetailComponent,
    TotemEntryEditComponent,
    TotemEntryReuseDataComponent,
    TotemEntryFamilyComponent,
    TotemEntryAddDescendantComponent
  ],
  entryComponents: [TotemEntryAddDescendantComponent, LeidingAddComponent]
})
export class TotemEntryModule {}
