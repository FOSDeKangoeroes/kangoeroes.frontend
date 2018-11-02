import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdjectivesComponent } from './pages/adjectives/adjectives.component';

const routes: Routes = [
  {
    path: '',
    component: AdjectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotemAdjectiveRoutingModule { }
