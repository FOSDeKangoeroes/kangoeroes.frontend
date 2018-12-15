import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
