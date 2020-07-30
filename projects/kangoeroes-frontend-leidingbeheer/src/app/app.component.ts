import { Component } from '@angular/core';
import { AuthService } from 'projects/kangoeroes-frontend-core/src/lib/auth/services/auth.service';
import { MonitoringService } from 'projects/kangoeroes-frontend-core/src/lib/monitoring/monitoring.service';




@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public auth: AuthService, private monitoringService: MonitoringService) {
    this.auth.handleAuthentication();
    this.auth.scheduleRenewal();

    if (auth.userProfile) {
      console.log(auth.userProfile);
    }

  }
}
