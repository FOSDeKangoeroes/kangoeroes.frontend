import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DrankTypeAddComponent } from '../../components/drank-type-add/drank-type-add.component';

@Component({
  selector: 'app-drank-type-list',
  templateUrl: './drank-type-list.component.html',
  styleUrls: ['./drank-type-list.component.scss'],
  providers: [SearchBarService]
})
export class DrankTypeListComponent implements OnInit {

  public addModal: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openAddModal() {
    this.addModal = this.modalService.show(DrankTypeAddComponent);
  }

}
