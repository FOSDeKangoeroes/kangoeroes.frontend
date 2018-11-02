import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotemFamilyTreeRoutingModule } from './totem-family-tree-routing.module';
import { TotemFamilyTreeComponent } from './pages/totem-family-tree/totem-family-tree.component';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  imports: [
    CommonModule,
    TotemFamilyTreeRoutingModule
  ],
  declarations: [TotemFamilyTreeComponent, TreeComponent]
})
export class TotemFamilyTreeModule { }
