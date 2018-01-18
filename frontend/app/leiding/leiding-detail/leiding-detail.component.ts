import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Leiding } from '../leiding.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LeidingChangeTakComponent } from '../leiding-change-tak/leiding-change-tak.component';
import { EventService } from '../../shared/event.service';
import { LeidingEditComponent } from '../leiding-edit/leiding-edit.component';

@Component({
  selector: 'app-leiding-detail',
  templateUrl: './leiding-detail.component.html',
  styleUrls: ['./leiding-detail.component.scss']
})
export class LeidingDetailComponent implements OnInit {

private _leiding: Leiding;

  changeTakModal: BsModalRef;
  editModal: BsModalRef;

  constructor(private route: ActivatedRoute, private modalService: BsModalService, private eventService: EventService) {
    this.route.data.subscribe(item => this._leiding = item['leiding']);

    this.eventService.$newLeiding.subscribe(res => {
      this._leiding = res;
    });
   }

  ngOnInit() {
  }

  get leiding() {
    return this._leiding;
  }

  openChangeTakModal() {
  this.changeTakModal = this.modalService.show(LeidingChangeTakComponent);
  this.changeTakModal.content.leidingId = this._leiding.id;
  }

  openEditModal() {
    this.eventService.activeLeiding = this._leiding;
    this.editModal = this.modalService.show(LeidingEditComponent);

  }
}
