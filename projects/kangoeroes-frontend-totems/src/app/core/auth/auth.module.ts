import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './pages/callback/callback.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CallbackComponent, ForbiddenComponent, LogoutComponent],
  exports: [CallbackComponent]
})
export class AuthModule { }
