import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { TitleService } from '../../../core/title/title.service';
import { AuthService } from '../../../core/auth/shared/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, public titleService: TitleService,
  public authService: AuthService) {}
}
