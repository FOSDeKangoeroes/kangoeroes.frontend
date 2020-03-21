import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { FullLayoutComponent } from './containers';
import { TakResolverService } from './tak/shared/tak-resolver.service';

import { AppForbiddenComponent } from './components/app-forbidden/app-forbidden.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CallbackComponent } from 'projects/kangoeroes-frontend-core/src/lib/auth/components/callback/callback.component';
import { AuthenticationGuard } from 'projects/kangoeroes-frontend-core/src/lib/auth/guards/authentication.guard';

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
      title: 'Home',
      role: 'financieel_verantwoordelijke'
    },
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { role: 'financieel_verantwoordelijke' }
      },
      {
        path: 'takken',
        loadChildren: () => import('./tak/tak.module').then(m => m.TakModule),
        data: {
          title: 'Takken',
          role: 'financieel_verantwoordelijke'
        }
      },
      {
        path: 'personen',
        loadChildren: () =>
          import('./leiding/leiding.module').then(m => m.LeidingModule),
        data: {
          title: 'Personen',
          role: 'financieel_verantwoordelijke'
        }
      },
      {
        path: 'poef',
        loadChildren: () =>
          import('./poef/poef.module').then(m => m.PoefModule),
        data: {
          title: 'Poef',
          role: 'financieel_verantwoordelijke'
        }
      }
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
