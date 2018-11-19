import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';

import { SnotifyService } from 'ng-snotify';
import { DataService } from '../../../services/data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './tak-delete.component.html',
  styleUrls: ['./tak-delete.component.scss']
})
export class TakDeleteComponent implements OnInit {

  title: string;
  takId: number;
  constructor(public deleteModalRef: BsModalRef,
    private dataService: DataService,
    private _router: Router,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit() {  }

  onDelete() {
    this.dataService.deleteTak(this.takId).subscribe(res => {
      if (res) {
        this.deleteModalRef.hide();
        this._router.navigate(['takken']);
        this.snotifyService.success('Tak succesvol verwijderd!');
      }
    });
  }

}
