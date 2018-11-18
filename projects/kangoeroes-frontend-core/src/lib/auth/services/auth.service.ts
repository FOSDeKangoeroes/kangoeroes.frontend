import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { KangoeroesAuthModule } from 'projects/kangoeroes-frontend-core/src/public_api';
import { ConfigService } from '../../config/config.service';
import { Config } from '../../config/config';



@Injectable({
  providedIn: KangoeroesAuthModule
})
export class AuthService {
   auth0: auth0.WebAuth;

  userProfile: auth0.Auth0UserProfile;
  private readonly config: Config 

  constructor(public router: Router, private configService: ConfigService) {

    this.config = this.configService.get();

     this.auth0 = new auth0.WebAuth({
      clientID: this.config.auth0ClientId,
      domain: this.config.auth0Domain,
      responseType: this.config.auth0ResponseType,
      audience: this.config.auth0Audience,
      redirectUri: this.config.auth0RedirectUri,
      scope: this.config.auth0Scopes
    });
  }

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

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
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
