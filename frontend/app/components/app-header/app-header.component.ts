import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  constructor(private auth: AuthService) {}
}
