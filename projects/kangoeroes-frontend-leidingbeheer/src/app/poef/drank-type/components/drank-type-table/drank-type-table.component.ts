import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { KangoeroeTableDataSource } from 'projects/kangoeroes-frontend-core/src/lib/data-table/data-source';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { EventService } from 'projects/kangoeroes-frontend-core/src/lib/data-table/event.service';
import { DrankType } from '../../shared/drank-type-model';
import { DrankTypeDataService } from '../../shared/drank-type-data.service';

@Component({
  selector: 'app-drank-type-table',
  templateUrl: './drank-type-table.component.html',
  styleUrls: ['./drank-type-table.component.scss']
})
export class DrankTypeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() displayedColumns: string[];

  private possibleColumns = ['naam'];
  dataSource: KangoeroeTableDataSource<DrankType>;

  constructor(
    private searchBarService: SearchBarService,
    private drankTypeDataService: DrankTypeDataService,
    private eventService: EventService) { }

  ngOnInit() {
    if (!this.displayedColumns) {
      this.displayedColumns = this.possibleColumns;
    }
    this.dataSource = new KangoeroeTableDataSource(
      this.paginator,
      this.sort,
      this.searchBarService,
      this.drankTypeDataService,
      this.eventService);
  }
  }

