import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../services/data.service';
import { EventService } from '../../shared/event.service';
import { Util } from '../util';
import { Leiding } from '../shared/leiding.model';
import { SnotifyService } from 'ng-snotify';
import * as moment from 'moment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-edit.component.html',
  styleUrls: ['./leiding-edit.component.scss']
})
export class LeidingEditComponent implements OnInit {

  public editLeidingFormGroup: FormGroup;

   leiding: Leiding;

  constructor(
    public editLeidingModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: DataService,
    private eventService: EventService,
    private snotifyService: SnotifyService) {
      this.leiding = this.eventService.activeLeiding;
    }

  ngOnInit() {
    this.editLeidingFormGroup = this.fb.group({
      naam: [this.leiding.naam, [Validators.required, Validators.minLength(2)]],
      voornaam: [this.leiding.voornaam, [Validators.required, Validators.minLength(2)]],
      email: [this.leiding.email, [Util.emailOrEmpty([Validators.email])]],
      datumGestopt: [this.leiding.datumGestopt],
      datumGestart: [this.leiding.leidingSinds]
    });
  }

  onSubmit() {
    const gestopt = moment(this.editLeidingFormGroup.value.datumGestopt).toISOString();
    const gestart = moment(this.editLeidingFormGroup.value.datumGestart).toISOString();
    const leiding = {
      naam: this.editLeidingFormGroup.value.naam,
      voornaam: this.editLeidingFormGroup.value.voornaam,
      email: this.editLeidingFormGroup.value.email,
      takId: this.editLeidingFormGroup.value.tak,
      datumGestopt: gestopt ? gestopt : undefined,
      leidingSinds: gestart ? gestart : undefined
    };

      this.dataService.updateLeiding(leiding, this.leiding.id).subscribe( res => {
        this.eventService.newLeiding(res);
        this.leiding = res;
        this.editLeidingModalRef.hide();
      this.snotifyService.success('Leiding succesvol gewijzigd!');
      });
  }

}
