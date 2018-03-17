import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
];

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV,
} from './components';


const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
];

import 'hammerjs';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TakModule } from './tak/tak.module';
import { CallbackComponent } from './components/callback/callback.component';
import { LeidingModule } from './leiding/leiding.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { RequestOptions, Http } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { GlobalLoaderComponent } from './shared/global-loader/global-loader.component';
import { LoadingService } from './shared/loading.service';
import { LoadingInterceptor } from './interceptors/loading-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthorizationGuard } from './auth/authorization.guard';
import { LoggedInGuard } from './auth/logged-in.guard';
import { AppForbiddenComponent } from './components/app-forbidden/app-forbidden.component';
import { DashboardModule } from './views/dashboard/dashboard.module';





@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TakModule,
    LeidingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SnotifyModule,
    DashboardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        }
      }
    })
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    CallbackComponent,
    GlobalLoaderComponent,
    AppForbiddenComponent
  ],
  providers: [
  {provide: 'SnotifyToastConfig',
  useValue: ToastDefaults},
  SnotifyService,
  LoadingService,
  {
provide: HTTP_INTERCEPTORS,
useClass: LoadingInterceptor,
multi: true
  },
  AuthService,
AuthorizationGuard,
LoggedInGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

