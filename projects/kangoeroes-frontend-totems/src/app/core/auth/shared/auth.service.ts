import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'qsVUJU2hWqxNu15XzwZp5AtkWhlJ6Wic',
    domain: 'dekangoeroes-development.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'admin.dekangoeroes.be',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid roles'
  });

  constructor(public router: Router) {}

  login() {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
       // window.location.hash = '';
        this.setSession(authResult);
        console.log('start navigating');
        
      }
      this.router.navigate(['/totems']);
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/logout']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getToken() {
    return localStorage.getItem('access_token');
  }
}
