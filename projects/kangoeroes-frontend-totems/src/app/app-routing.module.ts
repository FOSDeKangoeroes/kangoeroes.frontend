import { LogoutComponent } from './core/auth/pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './core/auth/pages/callback/callback.component';
import { AuthorizationGuard } from './core/auth/shared/logged-in.guard';
import { ForbiddenComponent } from './core/auth/pages/forbidden/forbidden.component';

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
