import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort,MatInput, MatPaginator } from '@angular/material';
import { Leiding } from '../../leiding/shared/leiding.model';
import { LeidingTableService } from '../../leiding/shared/leiding-table.service';
import { EventService } from '../event.service';
import { LeidingDataSource } from './leiding-data-source';
import { merge } from 'rxjs/observable/merge';
import { tap } from 'rxjs/operators';
import { LeidingDataService } from '../../leiding/shared/leiding-data.service';


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

  constructor(private leidingService: LeidingTableService, private eventService: EventService, private dataService: LeidingDataService) {
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
