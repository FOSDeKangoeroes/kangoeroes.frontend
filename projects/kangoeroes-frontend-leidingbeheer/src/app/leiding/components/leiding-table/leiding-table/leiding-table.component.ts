import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LeidingTableDataSource } from './leiding-table-datasource';
import { LeidingDataService } from '../../../shared/leiding-data.service';
import { LeidingService } from '../../../shared/leiding.service';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';

@Component({
  selector: 'app-leiding-table',
  templateUrl: './leiding-table.component.html',
  styleUrls: ['./leiding-table.component.scss']
})
export class LeidingTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() displayedColumns: string[];
  @Input() takId: number;

  dataSource: LeidingTableDataSource;
  loading = false;

  private possibleColumns = [
    'tak.volgorde',
    'voornaam',
    'naam',
    'email',
    'leidingSinds',
    'datumGestopt'
  ];

  constructor(
    private leidingDataService: LeidingDataService,
    public leidingService: LeidingService,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit() {

    // Optional to provide the columns, if nothing is provided, show all the columns
    if (!this.displayedColumns) {
      this.displayedColumns = this.possibleColumns;
    }

    this.leidingService.leidingLoading$.subscribe(res => this.loading = res);

    this.dataSource = new LeidingTableDataSource(
      this.paginator,
      this.sort,
      this.searchBarService,
      this.leidingDataService,
      this.leidingService,
      this.takId
    );
  }
}
