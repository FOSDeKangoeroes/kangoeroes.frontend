import { Component, OnInit } from '@angular/core';
import { Tak } from '../tak.model';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TakAddComponent } from '../tak-add/tak-add.component';
import { EventService } from '../../shared/event.service';
import { TakTableService } from '../shared/tak-table.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-tak-list',
  templateUrl: './tak-list.component.html',
  styleUrls: ['./tak-list.component.scss']
})
export class TakListComponent implements OnInit {

  public addModal: BsModalRef;

  displayedColumns = ['naam', 'leiding', 'volgorde'];
  constructor(private _dataService: DataService,
    private modalService: BsModalService,
    private eventService: EventService,
    private takService: TakTableService) {
    this.takService.displayedColumns = this.displayedColumns;
   }

  ngOnInit() {

  }

  openAddModal() {
    this.addModal = this.modalService.show(TakAddComponent);

  }

}
