import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrankListComponent } from './drank/pages/drank-list/drank-list.component';

const routes: Routes = [
  {
    path: 'drank',
    loadChildren: './drank/drank.module#DrankModule'
  },
  {
    path: 'drank-type',
    loadChildren: './drank-type/drank-type.module#DrankTypeModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoefRoutingModule { }
