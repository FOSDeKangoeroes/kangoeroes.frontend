import { Component, OnInit} from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingActions } from './leiding.actions';
import { LeidingTableService } from '../../shared/leiding-table.service';
import { LeidingAddComponent } from '../../components/leiding-add/leiding-add.component';
import { BehaviorSubject } from 'rxjs';


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
  displayedColumns = [
    'tak',
    'voornaam',
    'naam',
    'email',
    'leidingSinds',
    'datumGestopt'
  ];
  searchString$ = new BehaviorSubject<string>('');

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

  constructor(
    private modalService: BsModalService,
    private tableService: LeidingTableService
  ) {
    this.tableService.takId = 0;
    this.tableService.displayedColumns = this.displayedColumns;
  }

  ngOnInit() {}

  openAddModal() {
    this.addModal = this.modalService.show(LeidingAddComponent);
  }
}

