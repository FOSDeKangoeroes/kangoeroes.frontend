import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})
export class ColumnPickerComponent implements OnInit {

  @Input() possibleColumns: string[];

  @Input() selectedColumns: string[];

  dataSource: MatTableDataSource<string>;
  selection: SelectionModel<string>;
  displayedColumns = ['selection', 'columnName'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<string>(this.possibleColumns);
    this.selection = new SelectionModel<string>(true, this.selectedColumns);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
