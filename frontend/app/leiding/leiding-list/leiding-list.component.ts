import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../leiding.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingAddComponent } from '../leiding-add/leiding-add.component';
import { SelectionModel } from '@angular/cdk/collections';
import { LeidingActions } from './leiding.actions';

export interface Action {
  code: LeidingActions;
  friendlyMessage: string;
}



@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Leiding>();
  displayedColumns = ['select', 'takNaam', 'voornaam', 'naam', 'authId', 'email', 'leidingSinds', 'datumGestopt'];

  @ViewChild(MatSort) sort: MatSort;

  chosenOption: LeidingActions;

  selection = new SelectionModel<Leiding>(true, []);

  public addModal: BsModalRef;
  public takModal: BsModalRef;

  actions: Action[] = [
    {
      code: LeidingActions.DELETE,
      friendlyMessage: 'Verwijderen'
    },
    {
      code: LeidingActions.CHANGE_TAK,
      friendlyMessage: 'Tak wijzigen'
    }
  ];

  constructor(private dataService: DataService, private modalService: BsModalService) {
    this.dataService.getLeiding().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

  }

  openAddModal() {
    this.addModal = this.modalService.show(LeidingAddComponent);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  handleSelection() {
    // TODO
  switch (this.chosenOption) {
    case LeidingActions.CHANGE_TAK:

    break;

    case LeidingActions.DELETE:
    break;

  }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

