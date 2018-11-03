import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { KangoeroesAuthModule } from 'projects/kangoeroes-frontend-core/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    KangoeroesAuthModule
  ],
  declarations: [ForbiddenComponent, LogoutComponent],
  exports: []
})
export class AuthModule { }
