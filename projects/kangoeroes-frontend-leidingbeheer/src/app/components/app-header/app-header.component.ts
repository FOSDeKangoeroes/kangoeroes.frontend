import { Component } from '@angular/core';
import { AuthService } from 'projects/kangoeroes-frontend-core/src/lib/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  constructor(public auth: AuthService) {}
}
