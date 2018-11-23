import { Pagination } from './../../../models/pagination-model';
import { EventService } from './../../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SnotifyService } from 'ng-snotify';
import { Tak } from '../../../tak/shared/tak.model';
import { TakDataService } from '../../../tak/shared/tak-data.service';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { LeidingDataService } from '../../shared/leiding-data.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-change-tak.component.html',
  styleUrls: ['./leiding-change-tak.component.scss']
})
export class LeidingChangeTakComponent implements OnInit {

  constructor(public changeTakModal: BsModalRef,
    private takDataService: TakDataService,
    private leidingDataService: LeidingDataService,
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

    const queryOptions = new QueryOptions();

    queryOptions.pageNumber = this.pagination.currentPage;
    queryOptions.pageSize = this.pagination.pageSize;
    queryOptions.sortBy = 'volgorde';
    queryOptions.sortOrder = 'asc';

    this.takDataService.list(queryOptions).subscribe(res => {
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

  this.leidingDataService.tak(this.leidingId, takId).subscribe(res => {
    this.eventService.newLeiding(res);
    this.changeTakModal.hide();
    this.snotifyService.success('Tak succesvol gewijzigd!');
  });
}

  fetchMore(event) {
    if (this.takken.length < this.pagination.totalCount) {
      this.takkenLoading = true;
      const queryOptions = new QueryOptions();

      queryOptions.pageNumber = this.pagination.currentPage + 1;
      queryOptions.pageSize = this.pagination.pageSize;
      queryOptions.sortBy = 'volgorde';
      queryOptions.sortOrder = 'asc';
      this.takDataService.list(queryOptions)
        .subscribe(res => {
          const headers = res.headers.get('X-Pagination');
          this.pagination = JSON.parse(headers);
          this.takken = this.takken.concat(res.body);
          this.takkenLoading = false;
        });
    }
  }
}
