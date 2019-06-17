import { LogoutComponent } from './core/auth/pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ForbiddenComponent } from './core/auth/pages/forbidden/forbidden.component';
import { CallbackComponent } from 'projects/kangoeroes-frontend-core/src/lib/auth/components/callback/callback.component';
import { AuthenticationGuard } from 'projects/kangoeroes-frontend-core/src/lib/auth/guards/authentication.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'totems',
    canActivate: [AuthenticationGuard],
    pathMatch: 'full'
  },
  {
    path: 'animals',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./totemanimal/totemanimal.module').then(m => m.TotemAnimalModule)
  },
  {
    path: 'adjectives',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./totemadjective/totemadjective.module').then(m => m.TotemAdjectiveModule)
  },
  {
    path: 'totems',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./totem-entry/totem-entry.module').then(m => m.TotemEntryModule)
  },
  {
    path: 'tree',
    canActivate: [AuthenticationGuard],
    loadChildren:
      () => import('./totem-family-tree/totem-family-tree.module').then(m => m.TotemFamilyTreeModule)
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
