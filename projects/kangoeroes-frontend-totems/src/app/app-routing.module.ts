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
    loadChildren: './totemanimal/totemanimal.module#TotemAnimalModule'
  },
  {
    path: 'adjectives',
    canActivate: [AuthenticationGuard],
    loadChildren: './totemadjective/totemadjective.module#TotemAdjectiveModule'
  },
  {
    path: 'totems',
    canActivate: [AuthenticationGuard],
    loadChildren: './totem-entry/totem-entry.module#TotemEntryModule'
  },
  {
    path: 'tree',
    canActivate: [AuthenticationGuard],
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
