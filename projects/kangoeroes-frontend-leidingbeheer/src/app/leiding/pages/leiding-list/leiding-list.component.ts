import { Component, OnInit} from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingActions } from './leiding.actions';

import { LeidingAddComponent } from '../../components/leiding-add/leiding-add.component';
import { BehaviorSubject } from 'rxjs';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';


export interface Action {
  code: LeidingActions;
  friendlyMessage: string;
}



@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss'],
  providers: [SearchBarService]
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

  public addModal: BsModalRef;
  public takModal: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {}

  openAddModal() {
    this.addModal = this.modalService.show(LeidingAddComponent);
  }


}

