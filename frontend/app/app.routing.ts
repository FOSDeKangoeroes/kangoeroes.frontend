import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { TakListComponent } from './tak/tak-list/tak-list.component';
import { LeidingListComponent } from './leiding/leiding-list/leiding-list.component';

export const routes: Routes = [
  // Normale url (localhost:4200 bijv.) redirecten naar localhost:4200/#/dashboard
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'tak',
        component: TakListComponent,
        loadChildren: './tak/tak.module#TakModule'
      
      },
      {
        path: 'personen',
        component: LeidingListComponent,
        loadChildren: './leiding/leiding.module#LeidingModule'
      }
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
