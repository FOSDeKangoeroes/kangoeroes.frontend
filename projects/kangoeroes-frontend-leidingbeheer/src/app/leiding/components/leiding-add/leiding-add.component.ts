import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import * as moment from 'moment';
import { Leiding } from '../../shared/leiding.model';
import { Tak } from '../../../tak/shared/tak.model';
import { Util } from '../../util';
import { LeidingDataService } from '../../shared/leiding-data.service';
import { TakDataService } from '../../../tak/shared/tak-data.service';
import { LeidingService } from '../../shared/leiding.service';
import { EventService } from 'projects/kangoeroes-frontend-core/src/lib/data-table/event.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-add.component.html',
  styleUrls: ['./leiding-add.component.scss']
})
export class LeidingAddComponent implements OnInit {
  public addLeidingFormGroup: FormGroup;

  constructor(
    public addLeidingModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: LeidingDataService,
    public takDataService: TakDataService,
    private eventService: LeidingService,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit() {
    this.addLeidingFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      voornaam: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Util.emailOrEmpty([Validators.email])]],
      tak: [, [Validators.required]],
      leidingSinds: [''],
      datumGestopt: [''],
      datumGestart: ['']
    });
  }

  onSubmit() {
    const gestopt = moment(
      this.addLeidingFormGroup.value.datumGestopt
    ).toISOString();
    const gestart = moment(
      this.addLeidingFormGroup.value.datumGestart
    ).toISOString();
    const leiding = {
      naam: this.addLeidingFormGroup.value.naam,
      voornaam: this.addLeidingFormGroup.value.voornaam,
      email: this.addLeidingFormGroup.value.email,
      takId: this.addLeidingFormGroup.value.tak,
      datumGestopt: gestopt ? gestopt : undefined,
      leidingSinds: gestart ? gestart : undefined
    };

    this.dataService.create(leiding).subscribe(
      res => {
        this.eventService.entryChanged$.emit();
        this.addLeidingModalRef.hide();
        this.snotifyService.success('Leiding werd succesvol aangemaakt!');
      },
      error => {
        this.snotifyService.error(error.message, 'Error!');
      }
    );
  }
}
