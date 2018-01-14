import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../../leiding/leiding.model';
import { LeidingTableService } from '../../leiding/leiding-table.service';


@Component({
  selector: 'app-leiding-table',
  templateUrl: './leiding-table.component.html',
  styleUrls: ['./leiding-table.component.scss']
})
export class LeidingTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Leiding>();
  selection = new SelectionModel<Leiding>(true, []);
  displayedColumns: string[];

  constructor(private leidingService: LeidingTableService) {
  
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.leidingService.tableData.subscribe(res => {
      this.dataSource.data = res;
    });
    this.displayedColumns = this.leidingService.displayedColumns;
    this.dataSource.sort = this.sort;

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
