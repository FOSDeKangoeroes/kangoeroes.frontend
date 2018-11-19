import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../shared/leiding.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingAddComponent } from '../leiding-add/leiding-add.component';
import { SelectionModel } from '@angular/cdk/collections';
import { LeidingActions } from './leiding.actions';
import { LeidingTableService } from '../shared/leiding-table.service';
import { DataService } from '../../services/data.service';

export interface Action {
  code: LeidingActions;
  friendlyMessage: string;
}



@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit {

  displayedColumns = ['tak', 'voornaam', 'naam', 'email', 'leidingSinds', 'datumGestopt'];

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

  constructor(private dataService: DataService, private modalService: BsModalService, private tableService: LeidingTableService) {
  this.tableService.takId = 0;
   this.tableService.displayedColumns = this.displayedColumns;
  }

  ngOnInit() {

  }

  openAddModal() {
    this.addModal = this.modalService.show(LeidingAddComponent);
  }

}

