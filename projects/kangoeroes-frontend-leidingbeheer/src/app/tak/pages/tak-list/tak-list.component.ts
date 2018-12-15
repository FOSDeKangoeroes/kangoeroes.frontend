import { Component, OnInit } from '@angular/core';


import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EventService } from '../../../shared/event.service';
import { TakTableService } from '../../shared/tak-table.service';
import { TakAddComponent } from '../../components/tak-add/tak-add.component';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';



@Component({
  selector: 'app-tak-list',
  templateUrl: './tak-list.component.html',
  styleUrls: ['./tak-list.component.scss'],
  providers: [SearchBarService]
})
export class TakListComponent implements OnInit {

  public addModal: BsModalRef;

  constructor(
    private modalService: BsModalService) {
   }

  ngOnInit() {

  }

  openAddModal() {
    this.addModal = this.modalService.show(TakAddComponent);

  }

}
