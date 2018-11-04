

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';

import { KangoeroesAuthModule } from '../kangoeroes-auth.module';
import { AuthService } from 'projects/kangoeroes-frontend-core/src/lib/auth/services/auth.service';


@Injectable({ 
  providedIn: KangoeroesAuthModule
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {

      const token = decode(this.authService.getToken());
      const roles: string[] = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      if (roles.includes('opperhoofd')) {
        return true;

      } else {

        this.router.navigate(['/forbidden']); 
        return false;
      }
    }

    this.authService.login();
    return false;
 
  }
}
