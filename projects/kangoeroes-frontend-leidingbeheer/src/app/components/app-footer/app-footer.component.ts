import { Component } from '@angular/core';
import { gitVersion } from 'projects/kangoeroes-frontend-core/src/lib/config/git-version';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

 version: string;

 constructor() {
   this.version =  '1.0'; // `${gitVersion.branch}-${gitVersion.commit}`;
 }

}
