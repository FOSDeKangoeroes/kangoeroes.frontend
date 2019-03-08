import { Component } from '@angular/core';
import { AuthService } from './core/auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private auth: AuthService) {
    this.auth.handleAuthentication();
  }
}
