import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DrankAddComponent } from '../../components/drank-add/drank-add.component';

@Component({
  selector: 'app-drank-list',
  templateUrl: './drank-list.component.html',
  styleUrls: ['./drank-list.component.scss'],
  providers: [SearchBarService]
})
export class DrankListComponent implements OnInit {

  private addModal: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openAddModal() {
    this.addModal = this.modalService.show(DrankAddComponent);
  }
}
