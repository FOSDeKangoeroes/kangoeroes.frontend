import { TotemFamilyTreeComponent } from './pages/totem-family-tree/totem-family-tree.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TotemFamilyTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotemFamilyTreeRoutingModule { }
