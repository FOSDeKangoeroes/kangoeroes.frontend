

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './ui/nav/nav.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BadRequestInterceptor } from './core/interceptors/bad-request-interceptor';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ConfigModule } from 'projects/kangoeroes-frontend-core/src/lib/config/config.module';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { AuthModule } from './core/auth/auth.module';
import { LeidingAddComponent } from './leiding/leiding-add/leiding-add.component';
import { TokenInterceptor } from 'projects/kangoeroes-frontend-core/src/lib/auth/interceptors/token-interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BadRequestInterceptor, multi: true },
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
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
    AuthModule,
    ConfigModule,
    FlexLayoutModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: MAT_DATE_LOCALE, useValue: 'nl-be' },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
