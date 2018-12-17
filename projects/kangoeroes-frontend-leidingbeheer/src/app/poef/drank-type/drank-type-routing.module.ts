import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrankTypeListComponent } from './pages/drank-type-list/drank-type-list.component';

const routes: Routes = [
  {
    path: '',
    component: DrankTypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrankTypeRoutingModule { }
