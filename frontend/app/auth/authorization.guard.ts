import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';
import { DataService } from '../services/data.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthService, private dataService: DataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAuthenticated()) {

      const token = decode(this.authService.getToken());
      const roles: string[] = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      if (roles.includes('financieel_verantwoordelijke')) {
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

