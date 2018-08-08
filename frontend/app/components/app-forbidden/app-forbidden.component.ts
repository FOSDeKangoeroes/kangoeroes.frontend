import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';


@Component({
  selector: 'app-app-forbidden',
  templateUrl: './app-forbidden.component.html',
  styleUrls: ['./app-forbidden.component.scss']
})
export class AppForbiddenComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
