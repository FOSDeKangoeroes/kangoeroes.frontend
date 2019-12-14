import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'kng-core-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  @Output() searchString$ = new EventEmitter<string>();

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit() {
  }

  applyFilter(searchString: string) {
    this.searchBarService.applySearchString(searchString);
  }

}
