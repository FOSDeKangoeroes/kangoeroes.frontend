import { Component, OnInit } from '@angular/core';
import { TakDataService } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/tak/shared/tak-data.service';
import { Tak } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/tak/shared/tak.model';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public takken: Tak[];

  columnsToDisplay = [
   'name', 'tabIsAllowed'
  ];

  constructor(public takDataService: TakDataService, public snotify: SnotifyService) { }

  ngOnInit() {
    const queryOptions = new QueryOptions();
    queryOptions.pageSize = 100;
    queryOptions.sortBy = 'volgorde';
    this.takDataService.list(queryOptions).subscribe(res => {
      this.takken = res.body;
    });
  }

  toggleTabAllowed(tak: Tak) {
    tak.tabIsAllowed = !tak.tabIsAllowed;

    this.takDataService.update(tak, tak.id).subscribe(res => {
      this.snotify.success(`Poefstatus voor ${res.displayName} is gewijzigd!`);
    });
  }

}
