import { Component } from '@angular/core';
import { AuthService } from '../../../kangoeroes-frontend-core/src/lib/auth/services/auth.service';
import { MonitoringService } from 'projects/kangoeroes-frontend-core/src/lib/monitoring/monitoring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  version: string;

  constructor(private auth: AuthService, private monitoringService: MonitoringService) {
    this.auth.handleAuthentication();

    this.version = `UNKNOWN`;
  }
}
