import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSort, MatTableDataSource, MatInput, MatPaginator } from '@angular/material';
import { Leiding } from '../../leiding/leiding.model';
import { LeidingTableService } from '../../leiding/leiding-table.service';
import { EventService } from '../event.service';
import { LeidingDataSource } from './leiding-data-source';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';


@Component({
  selector: 'app-leiding-table',
  templateUrl: './leiding-table.component.html',
  styleUrls: ['./leiding-table.component.scss']
})
export class LeidingTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatInput) filter: MatInput;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Leiding>();
  selection = new SelectionModel<Leiding>(true, []);
  displayedColumns: string[];

  isLoadingResults = false;
  resultsLength = 0;

  constructor(private leidingService: LeidingTableService, private eventService: EventService, private dataService: DataService) {
   }

  ngOnInit() {
  
  }

  ngAfterViewInit() {
const takId = this.leidingService.takId;
this.displayedColumns = this.leidingService.displayedColumns;
 this.dataSource.paginator = this.paginator;
    this.sort.sortChange
      .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.dataService.getLeiding(
          this.sort.active, this.sort.direction, '', takId);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.resultsLength = data.length;

        return data;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        return observableOf([]);
      })
      ).subscribe(data => this.dataSource.data = data);


  }


  loadLeiding() {
   this.dataService.getLeiding(this.sort.active, this.sort.direction);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
