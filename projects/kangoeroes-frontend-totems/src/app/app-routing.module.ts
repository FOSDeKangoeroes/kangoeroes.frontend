import { LogoutComponent } from './core/auth/pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ForbiddenComponent } from './core/auth/pages/forbidden/forbidden.component';
import { CallbackComponent } from 'projects/kangoeroes-frontend-core/src/lib/auth/components/callback/callback.component';
import { AuthorizationGuard } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/core/auth/authorization.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'totems',
    canActivate: [AuthorizationGuard],
    pathMatch: 'full'
  },
  {
    path: 'animals',
    canActivate: [AuthorizationGuard],
    loadChildren: './totemanimal/totemanimal.module#TotemAnimalModule'
  },
  {
    path: 'adjectives',
    canActivate: [AuthorizationGuard],
    loadChildren: './totemadjective/totemadjective.module#TotemAdjectiveModule'
  },
  {
    path: 'totems',
    canActivate: [AuthorizationGuard],
    loadChildren: './totem-entry/totem-entry.module#TotemEntryModule'
  },
  {
    path: 'tree',
    canActivate: [AuthorizationGuard],
    loadChildren:
      './totem-family-tree/totem-family-tree.module#TotemFamilyTreeModule'
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
