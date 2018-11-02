import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tak } from '../../tak/tak.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../shared/event.service';
import { DataService } from '../../services/data.service';
import { SnotifyService } from 'ng-snotify';
import { Pagination } from '../../models/pagination-model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-change-tak.component.html',
  styleUrls: ['./leiding-change-tak.component.scss']
})
export class LeidingChangeTakComponent implements OnInit {

  constructor(public changeTakModal: BsModalRef,
    private dataService: DataService,
    private fb: FormBuilder,
    private eventService: EventService, private snotifyService: SnotifyService) { }

  public changeTakFormGroup: FormGroup;
  public takken: Tak[];
  public takkenLoading = true;
  leidingId: number;

  pagination: Pagination;

  ngOnInit() {
    this.pagination = {
      pageSize: 10,
      totalCount: 0,
      currentPage: 1,
      totalPages: 0
    };
    this.dataService.getTakken('volgorde', 'asc', '', this.pagination.pageSize, this.pagination.currentPage).subscribe(res => {
      const headers = res.headers.get('X-Pagination');
      this.pagination = JSON.parse(headers);
      this.takkenLoading = false;
      this.takken = res.body;

    });

    this.changeTakFormGroup = this.fb.group({
      tak: ['', [Validators.required, Validators.min(1)]]
    });

}

onSubmit() {
  const takId = this.changeTakFormGroup.value.tak;

  this.dataService.changeTakForLeiding(this.leidingId, takId).subscribe(res => {
    this.eventService.newLeiding(res);
    this.changeTakModal.hide();
    this.snotifyService.success('Tak succesvol gewijzigd!');
  });
}

  fetchMore(event) {
    if (this.takken.length < this.pagination.totalCount) {
      this.takkenLoading = true;
      this.dataService.getTakken('volgorde', 'asc', '', this.pagination.pageSize, this.pagination.currentPage + 1)
        .subscribe(res => {
          const headers = res.headers.get('X-Pagination');
          this.pagination = JSON.parse(headers);
          this.takken = this.takken.concat(res.body);
          this.takkenLoading = false;
        });
    }
  }
}
