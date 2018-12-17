import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { FullLayoutComponent } from './containers';
import { TakResolverService } from './tak/shared/tak-resolver.service';

import { AppForbiddenComponent } from './components/app-forbidden/app-forbidden.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthorizationGuard } from './core/auth/authorization.guard';
import { CallbackComponent } from 'projects/kangoeroes-frontend-core/src/lib/auth/components/callback/callback.component';

const routes: Routes = [
  // Normale url (localhost:4200 bijv.) redirecten naar localhost:4200/#/dashboard
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'takken',
        loadChildren: './tak/tak.module#TakModule',
        data: {
          title: 'Takken'
        }
      },
      {
        path: 'personen',
        loadChildren: './leiding/leiding.module#LeidingModule',
        data: {
          title: 'Personen'
        }
      },
      {
        path: 'poef',
        loadChildren: './poef/poef.module#PoefModule',
        data: {
          title: 'Poef'
        }
      },
    ]
  },
  {
    path: 'forbidden',
    component: AppForbiddenComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [TakResolverService],
  exports: [RouterModule]
})
export class AppRoutingModule {}
