import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent { 

  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }
}
