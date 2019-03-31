import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatProgressBarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
