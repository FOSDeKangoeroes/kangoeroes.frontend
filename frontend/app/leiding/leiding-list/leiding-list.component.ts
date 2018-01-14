import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../leiding.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingAddComponent } from '../leiding-add/leiding-add.component';
import { SelectionModel } from '@angular/cdk/collections';
import { LeidingActions } from './leiding.actions';
import { LeidingTableService } from '../leiding-table.service';

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

  displayedColumns = ['select', 'takNaam', 'voornaam', 'naam', 'email', 'leidingSinds', 'datumGestopt'];

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
   this.tableService.tableData = this.dataService.getLeiding();
   this.tableService.displayedColumns = this.displayedColumns;
  }

  ngOnInit() {

  }

 

  openAddModal() {
    this.addModal = this.modalService.show(LeidingAddComponent);
  }

}

