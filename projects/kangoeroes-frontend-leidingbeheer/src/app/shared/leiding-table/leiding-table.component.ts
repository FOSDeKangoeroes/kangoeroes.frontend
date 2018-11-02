import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSort, MatTableDataSource, MatInput, MatPaginator } from '@angular/material';
import { Leiding } from '../../leiding/leiding.model';
import { LeidingTableService } from '../../leiding/leiding-table.service';
import { EventService } from '../event.service';
import { LeidingDataSource } from './leiding-data-source';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { DataService } from '../../services/data.service';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';
import { tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-leiding-table',
  templateUrl: './leiding-table.component.html',
  styleUrls: ['./leiding-table.component.scss']
})
export class LeidingTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatInput) filter: MatInput;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: LeidingDataSource;
  selection = new SelectionModel<Leiding>(true, []);
  displayedColumns: string[];

  resultsLength = 0;

  constructor(private leidingService: LeidingTableService, private eventService: EventService, private dataService: DataService) {
   }

  ngOnInit() {
    this.dataSource = new LeidingDataSource(this.dataService);
    this.dataSource.loadLeiding('naam', 'asc', '', this.leidingService.takId, 25, 0);
  }

  ngAfterViewInit() {
    const takId = this.leidingService.takId;
    this.displayedColumns = this.leidingService.displayedColumns;
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadLeidingPage())
      )
      .subscribe();

  }

  loadLeidingPage() {
   this.dataSource
   .loadLeiding(
    this.sort.active,
    this.sort.direction,
    this.filter.value,
    this.leidingService.takId,
    this.paginator.pageSize,
    this.paginator.pageIndex);
  }

  /*isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }*/
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.paginator.pageIndex = 0;
    this.loadLeidingPage();
  }

}
