import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './pages/animals/animals.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotemAnimalRoutingModule { }
