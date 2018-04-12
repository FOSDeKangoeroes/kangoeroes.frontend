import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Tak } from '../../tak/tak.model';
import { MatSort, MatInput, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TakTableService } from '../../tak/tak-table.service';
import { EventService } from '../event.service';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { DataService } from '../../services/data.service';
import { TakDataSource } from './tak-data-source';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tak-table',
  templateUrl: './tak-table.component.html',
  styleUrls: ['./tak-table.component.scss']
})
export class TakTableComponent implements OnInit, AfterViewInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatInput) filter: MatInput;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: TakDataSource;
  selection = new SelectionModel<Tak>(true, []);
  displayedColumns: string[];

  resultsLength = 0;

  constructor(private takService: TakTableService, private eventService: EventService, private dataService: DataService) { }

  ngOnInit() {
    this.dataSource = new TakDataSource(this.dataService);
    this.dataSource.loadTakken('volgorde', 'asc', '', 6, 0);
  }

  ngAfterViewInit() {

    this.displayedColumns = this.takService.displayedColumns;
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadTakPage())
      )
      .subscribe();
  }

  loadTakPage() {
    this.dataSource
      .loadTakken(
        this.sort.active,
        this.sort.direction,
        this.filter.value,
        this.paginator.pageSize,
        this.paginator.pageIndex);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.paginator.pageIndex = 0;
    this.loadTakPage();
  }
}
