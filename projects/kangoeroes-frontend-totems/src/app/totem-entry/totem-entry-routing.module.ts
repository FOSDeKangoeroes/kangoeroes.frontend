import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotemEntriesComponent } from './pages/totem-entries/totem-entries.component';
import { TotemEntryDetailComponent } from './pages/totem-entry-detail/totem-entry-detail.component';
import { TotemEntryResolver } from './shared/totem-entry-resolver';

const routes: Routes = [
  {
    path: '',
    component: TotemEntriesComponent
  },
  {
    path: ':id',
    component: TotemEntryDetailComponent,
    resolve: {totemEntry: TotemEntryResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotemEntryRoutingModule { }
