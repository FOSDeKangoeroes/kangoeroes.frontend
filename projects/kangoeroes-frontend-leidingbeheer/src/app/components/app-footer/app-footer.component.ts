import { Component } from '@angular/core';

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
