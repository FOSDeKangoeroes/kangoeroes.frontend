import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { LeidingTableDataSource } from './leiding-table-datasource';
import { BehaviorSubject } from 'rxjs';
import { LeidingDataService } from '../../../shared/leiding-data.service';
import { LeidingService } from '../../../shared/leiding.service';

@Component({
  selector: 'app-leiding-table',
  templateUrl: './leiding-table.component.html',
  styleUrls: ['./leiding-table.component.scss']
})
export class LeidingTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: LeidingTableDataSource;

  @Input() displayedColumns: string[];
  @Input() searchString$: BehaviorSubject<string>;

  constructor(private leidingDataService: LeidingDataService, private leidingService: LeidingService) {}

  ngOnInit() {
    this.dataSource = new LeidingTableDataSource(
      this.paginator,
      this.sort,
      this.searchString$,
      this.leidingDataService,
      this.leidingService
    );
  }
}
