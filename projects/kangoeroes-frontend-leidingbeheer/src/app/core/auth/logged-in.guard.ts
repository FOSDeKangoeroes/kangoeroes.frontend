import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'projects/kangoeroes-frontend-core/src/lib/auth/services/auth.service';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authService.isAuthenticated()) {
          return true;
      }
  this.authService.login();
  }
}
