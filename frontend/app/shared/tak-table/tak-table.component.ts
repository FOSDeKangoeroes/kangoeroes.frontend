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

@Component({
  selector: 'app-tak-table',
  templateUrl: './tak-table.component.html',
  styleUrls: ['./tak-table.component.scss']
})
export class TakTableComponent implements OnInit, AfterViewInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatInput) filter: MatInput;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Tak>();
  selection = new SelectionModel<Tak>(true, []);
  displayedColumns: string[];

  isLoadingResults = false;
  resultsLength = 0;

  constructor(private takService: TakTableService, private eventService: EventService, private dataService: DataService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.displayedColumns = this.takService.displayedColumns;
    this.dataSource.paginator = this.paginator;
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.eventService.$newLeiding)
      .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.dataService.getTakken(
          this.sort.active, this.sort.direction);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.resultsLength = data.length;

        return data;
      }),
      catchError((err) => {
        this.isLoadingResults = false;
        console.log(err);
        return observableOf([]);
      })
      ).subscribe(data => this.dataSource.data = data);
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
