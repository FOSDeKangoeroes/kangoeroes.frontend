import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';

@Component({
  selector: 'app-drank-type-list',
  templateUrl: './drank-type-list.component.html',
  styleUrls: ['./drank-type-list.component.scss'],
  providers: [SearchBarService]
})
export class DrankTypeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
