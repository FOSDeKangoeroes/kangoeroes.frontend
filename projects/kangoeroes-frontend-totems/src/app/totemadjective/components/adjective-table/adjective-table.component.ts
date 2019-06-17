import { AdjectiveService } from '../../shared/adjective.service';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdjectiveTableDataSource } from './adjective-table-datasource';

import { Adjective } from '../../shared/adjective.model';
import { TotemAdjectiveDataService } from '../../shared/totem-adjective-data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'adjective-table',
  templateUrl: './adjective-table.component.html',
  styleUrls: ['./adjective-table.component.scss']
})
export class AdjectiveTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AdjectiveTableDataSource;

  @Input() searchString$: BehaviorSubject<string>;
  @Input() displayedColumns: string[];
  @Output() edit = new EventEmitter<Adjective>();


  constructor(private adjectiveDataService: TotemAdjectiveDataService, private adjectiveService: AdjectiveService) {

  }

  ngOnInit() {
   this.dataSource = new AdjectiveTableDataSource(
     this.paginator,
     this.sort,
     this.searchString$,
     this.adjectiveDataService,
     this.adjectiveService);
  }

  editAdjective(adjective: Adjective) {
    this.edit.emit(adjective);
  }
}
