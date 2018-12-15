import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { TakDataService } from '../../shared/tak-data.service';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { TakTableDataSource } from './tak-table-data-source';
import { TakService } from '../../shared/tak.service';

@Component({
  selector: 'app-tak-table',
  templateUrl: './tak-table.component.html',
  styleUrls: ['./tak-table.component.scss']
})
export class TakTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() displayedColumns: string[];

  dataSource: TakTableDataSource;

  private possibleColumns = [
    'naam',
    'leiding',
    'volgorde',
  ];

  constructor(
    private takDataService: TakDataService,
    private searchBarService: SearchBarService,
    private takService: TakService) {}

  ngOnInit() {
    if (!this.displayedColumns) {
      this.displayedColumns = this.possibleColumns;
    }

    this.dataSource = new TakTableDataSource(
      this.paginator,
      this.sort,
      this.searchBarService,
      this.takDataService,
      this.takService
    );

  }
}
