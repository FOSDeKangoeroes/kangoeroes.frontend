import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrankTypeListComponent } from './pages/drank-type-list/drank-type-list.component';
import { DrankTypeDetailComponent } from './pages/drank-type-detail/drank-type-detail.component';
import { DrankTypeResolver } from './shared/drank-type.resolver';

const routes: Routes = [
  {
    path: '',
    component: DrankTypeListComponent
  },
  {
    path: ':id',
    component: DrankTypeDetailComponent,
    resolve: {type: DrankTypeResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrankTypeRoutingModule { }
