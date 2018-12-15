import { Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tak } from '../../shared/tak.model';
import { LeidingTableService } from '../../../leiding/shared/leiding-table.service';
import { EventService } from '../../../shared/event.service';
import { TakEditComponent } from '../../components/tak-edit/tak-edit.component';
import { TakDeleteComponent } from '../../components/tak-delete/tak-delete.component';
import { TakLeidingAddComponent } from '../../components/tak-leiding-add/tak-leiding-add.component';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';






@Component({
  selector: 'app-tak-detail',
  templateUrl: './tak-detail.component.html',
  styleUrls: ['./tak-detail.component.scss'],
  providers: [SearchBarService]
})
export class TakDetailComponent implements OnInit {

  // Modals
  public editModal: BsModalRef;
  public deleteModal: BsModalRef;
  public addLeidingModal: BsModalRef;

  // Entity
  private _tak: Tak;
  public hasLeiding: boolean;

  displayedColumns = ['voornaam', 'naam', 'email', 'leidingSinds', 'datumGestopt'];

  constructor(private route: ActivatedRoute,
    private modalService: BsModalService,
    private leidingTableService: LeidingTableService,
  private eventService: EventService) {

  }
  ngOnInit() {
    this.route.data.subscribe(item => this._tak = item['tak']);
    this.hasLeiding = this._tak.leidingCount > 0;
    this.leidingTableService.takId = this._tak.id;
    this.leidingTableService.displayedColumns = this.displayedColumns;
  }

  get tak() {
    return this._tak;
  }


  openEditModal() {
    this.eventService.activeTak = this._tak;
    this.editModal = this.modalService.show(TakEditComponent);

  }

  openDeleteModal() {
    this.deleteModal = this.modalService.show(TakDeleteComponent);
    this.deleteModal.content.takId = this._tak.id;
    this.deleteModal.content.title = this._tak.naam;

  }

  openAddModal() {
    this.addLeidingModal = this.modalService.show(TakLeidingAddComponent);
    this.addLeidingModal.content.naam = this._tak.naam;
    this.addLeidingModal.content.takId = this._tak.id;
  }

}
