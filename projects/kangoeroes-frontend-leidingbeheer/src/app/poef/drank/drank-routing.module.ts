import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrankListComponent } from './pages/drank-list/drank-list.component';

const routes: Routes = [
  {
    path: '',
    component: DrankListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrankRoutingModule { }
