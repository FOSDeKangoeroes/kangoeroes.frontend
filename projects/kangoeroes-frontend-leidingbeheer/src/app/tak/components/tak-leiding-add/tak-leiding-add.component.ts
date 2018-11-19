import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { SnotifyService } from 'ng-snotify';
import * as moment from 'moment';
import { DataService } from '../../../services/data.service';
import { EventService } from '../../../shared/event.service';
import { Util } from '../../../leiding/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './tak-leiding-add.component.html',
  styleUrls: ['./tak-leiding-add.component.scss']
})
export class TakLeidingAddComponent implements OnInit {

  public addLeidingFormGroup: FormGroup;

  naam: string;
  takId: number;

  constructor(public addLeidingModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: DataService,
    private eventService: EventService,
    private snotifyService: SnotifyService) { }

  ngOnInit() {
    this.addLeidingFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      voornaam: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Util.emailOrEmpty([Validators.email])]],
      datumGestopt: [''],
      datumGestart: ['']
    });
  }

  onSubmit() {

    const gestopt = moment(this.addLeidingFormGroup.value.datumGestopt).toISOString();
    const gestart = moment(this.addLeidingFormGroup.value.datumGestart).toISOString();
    const leiding = {
      naam: this.addLeidingFormGroup.value.naam,
      voornaam: this.addLeidingFormGroup.value.voornaam,
      email: this.addLeidingFormGroup.value.email,
      takId: this.takId,
      datumGestopt: gestopt ? gestopt : undefined,
      leidingSinds: gestart ? gestart : undefined
    };

    this.dataService.addLeiding(leiding).subscribe(res => {
      this.eventService.newLeiding(res);
      this.addLeidingModalRef.hide();
      this.snotifyService.success('Leiding werd succesvol aangemaakt!');

    }, error => {
      this.snotifyService.error(error.message, 'Error!');
    });

  }

}
