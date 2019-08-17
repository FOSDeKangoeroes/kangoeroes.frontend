import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrankListComponent } from './pages/drank-list/drank-list.component';
import { DrankDetailComponent } from './pages/drank-detail/drank-detail.component';
import { DrankResolver } from './shared/drank.resolver';

const routes: Routes = [
  {
    path: '',
    component: DrankListComponent
  },
  {
    path: ':id',
    component: DrankDetailComponent,
    resolve: {type: DrankResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrankRoutingModule { }
