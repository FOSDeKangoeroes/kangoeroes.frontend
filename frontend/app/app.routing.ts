import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { TakListComponent } from './tak/tak-list/tak-list.component';
import { LeidingListComponent } from './leiding/leiding-list/leiding-list.component';
import { TakDetailComponent } from './tak/tak-detail/tak-detail.component';
import { TakResolverService } from './tak/tak-resolver.service';
import { CallbackComponent } from './components/callback/callback.component';


const routes: Routes = [
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
        path: 'takken',
        component: TakListComponent,

      },
      {
        path: 'takken/:id',
        component: TakDetailComponent,
        resolve: {tak: TakResolverService}
      },
      {
        path: 'personen',
        component: LeidingListComponent
      },
      {
        path: 'callback',
        component: CallbackComponent,
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
  providers: [TakResolverService],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
