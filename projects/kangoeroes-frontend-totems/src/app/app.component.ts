import { Component } from '@angular/core';
import { AuthService } from '../../../kangoeroes-frontend-core/src/lib/auth/services/auth.service';
import { gitVersion } from 'projects/kangoeroes-frontend-core/src/lib/config/git-version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  version: string;

  constructor(private auth: AuthService) {
    this.auth.handleAuthentication();

    this.version = `${gitVersion.branch}-${gitVersion.commit}`;
  }
}
