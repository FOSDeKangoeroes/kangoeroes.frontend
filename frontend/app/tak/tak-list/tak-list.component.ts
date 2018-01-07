import { Component, OnInit } from '@angular/core';
import { Tak } from '../tak.model';
import { DataService } from '../../data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TakAddComponent } from '../tak-add/tak-add.component';


@Component({
  selector: 'app-tak-list',
  templateUrl: './tak-list.component.html',
  styleUrls: ['./tak-list.component.scss']
})
export class TakListComponent implements OnInit {

  public addModal: BsModalRef;

  private _takken: Tak[];
  constructor(private _dataService: DataService, private modalService: BsModalService) { }

  ngOnInit() {
    this._dataService.takken.subscribe(items => this._takken = items);
  }

  get takken()  {
    return this._takken;
  }

  openAddModal() {
    this.addModal = this.modalService.show(TakAddComponent);

  }

}
