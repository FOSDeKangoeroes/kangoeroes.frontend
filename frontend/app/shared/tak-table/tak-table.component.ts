import { Component, OnInit, ViewChild } from '@angular/core';
import { Tak } from '../../tak/tak.model';
import { MatSort, MatInput, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TakTableService } from '../../tak/tak-table.service';
import { EventService } from '../event.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-tak-table',
  templateUrl: './tak-table.component.html',
  styleUrls: ['./tak-table.component.scss']
})
export class TakTableComponent implements OnInit, AfterViewInit {
 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatInput) filter: MatInput;
  dataSource = new MatTableDataSource<Tak>();
  selection = new SelectionModel<Tak>(true, []);
  displayedColumns: string[];
  constructor(private takService: TakTableService, private eventService: EventService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.takService.tableData.subscribe(res => {
      this.dataSource.data = res;
    });
    this.displayedColumns = this.takService.displayedColumns;
    this.dataSource.sort = this.sort;
    this.eventService.$newTak.subscribe((res) => {
      this.dataSource.data.push(res);
      this.refreshTable();
    });
  }

  refreshTable() {
    this.dataSource.filter = '';
    this.dataSource.filter = this.filter.value;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
