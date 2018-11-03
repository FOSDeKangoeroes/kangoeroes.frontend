import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForbiddenComponent, LogoutComponent],
  exports: []
})
export class AuthModule { }
