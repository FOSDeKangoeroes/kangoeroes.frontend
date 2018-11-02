import { TitleService } from '../../../core/title/title.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotemEntry } from '../../shared/totem-entry-model';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';

@Component({
  selector: 'app-totem-entry-detail',
  templateUrl: './totem-entry-detail.component.html',
  styleUrls: ['./totem-entry-detail.component.scss']
})
export class TotemEntryDetailComponent implements OnInit {
   totemEntry: TotemEntry;
   descendants: TotemEntry[];
  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private totemEntryDataService: TotemEntryDataService
  ) {
    this.route.data.subscribe(item => {
      this.totemEntry = item['totemEntry'];
      this.titleService.setTitle(`${this.totemEntry.displayName}`);

      this.totemEntryDataService
        .descendants(this.totemEntry.id)
        .subscribe(res => {
          this.descendants = res;
        });
    });
  }

  ngOnInit() {}
}
