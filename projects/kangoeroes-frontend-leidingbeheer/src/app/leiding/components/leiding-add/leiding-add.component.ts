import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SnotifyService } from 'ng-snotify';
import * as moment from 'moment';
import { Leiding } from '../../shared/leiding.model';
import { EventService } from '../../../shared/event.service';
import { Pagination } from '../../../models/pagination-model';
import { Tak } from '../../../tak/shared/tak.model';
import { Util } from '../../util';
import { LeidingDataService } from '../../shared/leiding-data.service';
import { TakDataService } from '../../../tak/shared/tak-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-add.component.html',
  styleUrls: ['./leiding-add.component.scss']
})
export class LeidingAddComponent implements OnInit {

  public addLeidingFormGroup: FormGroup;
  public takken: Tak[];
  public takkenLoading = true;
  pagination: Pagination;

  @Output () public newLeiding = new EventEmitter<Leiding>();
  constructor(public addLeidingModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: LeidingDataService,
    private takDataService: TakDataService,
    private eventService: EventService,
    private snotifyService: SnotifyService) { }

  ngOnInit() {

    this.addLeidingFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      voornaam: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Util.emailOrEmpty([Validators.email])]],
      leidingSinds: [''],
      datumGestopt: [''],
      datumGestart: ['']
    });
  }

onSubmit() {

  const gestopt = moment(this.addLeidingFormGroup.value.datumGestopt).toISOString();
  const gestart = moment(this.addLeidingFormGroup.value.datumGestart).toISOString();
  const leiding =  {
    naam: this.addLeidingFormGroup.value.naam,
    voornaam: this.addLeidingFormGroup.value.voornaam,
    email : this.addLeidingFormGroup.value.email,
    takId : this.addLeidingFormGroup.value.tak,
    datumGestopt: gestopt ? gestopt : undefined,
    leidingSinds: gestart ? gestart : undefined
  };

  this.dataService.create(leiding).subscribe(res => {
    this.eventService.newLeiding(res);
    this.addLeidingModalRef.hide();
    this.snotifyService.success('Leiding werd succesvol aangemaakt!');

  }, error => {
    this.snotifyService.error(error.message, 'Error!');
  });

}

  addFormControl(name: string, formGroup: FormGroup): void {
    this.addLeidingFormGroup.addControl(name, formGroup);
  }

}
