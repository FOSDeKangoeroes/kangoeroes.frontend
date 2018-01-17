import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Leiding } from '../leiding.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LeidingChangeTakComponent } from '../leiding-change-tak/leiding-change-tak.component';

@Component({
  selector: 'app-leiding-detail',
  templateUrl: './leiding-detail.component.html',
  styleUrls: ['./leiding-detail.component.scss']
})
export class LeidingDetailComponent implements OnInit {

private _leiding: Leiding;

  changeTakModal: BsModalRef;
  constructor(private route: ActivatedRoute, private modalService: BsModalService) {
    this.route.data.subscribe(item => this._leiding = item['leiding']);
   }

  ngOnInit() {
  }

  get leiding() {
    return this._leiding;
  }

  openChangeTakModal() {
  this.changeTakModal = this.modalService.show(LeidingChangeTakComponent);
  }
}
