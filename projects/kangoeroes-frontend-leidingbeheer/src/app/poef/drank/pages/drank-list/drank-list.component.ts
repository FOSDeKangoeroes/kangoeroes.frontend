import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';

@Component({
  selector: 'app-drank-list',
  templateUrl: './drank-list.component.html',
  styleUrls: ['./drank-list.component.scss'],
  providers: [SearchBarService]
})
export class DrankListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
