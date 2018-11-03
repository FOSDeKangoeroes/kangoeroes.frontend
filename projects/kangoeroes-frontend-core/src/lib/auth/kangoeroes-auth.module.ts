import { CallbackComponent } from './components/callback/callback.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationGuard } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/core/auth/authorization.guard';

@NgModule({
  providers: [
    AuthorizationGuard
  ],
  declarations: [CallbackComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CallbackComponent
  ]
})
export class KangoeroesAuthModule { }
 