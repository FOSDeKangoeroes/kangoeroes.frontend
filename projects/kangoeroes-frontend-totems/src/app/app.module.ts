
import { AuthModule } from './core/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './ui/nav/nav.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BadRequestInterceptor } from './core/interceptors/bad-request-interceptor';
import {
  MatSnackBarModule,
  MatCardModule,
  MatIconModule,
  MAT_DATE_LOCALE
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { KangoeroesAuthModule } from 'projects/kangoeroes-frontend-core/src/public_api';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BadRequestInterceptor, multi: true }
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatSnackBarModule,
    MatCardModule,
    NavModule,
    MatIconModule,
    MatMomentDateModule,
    AuthModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: MAT_DATE_LOCALE, useValue: 'nl-be' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
