import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SnotifyService } from 'ng-snotify';

import { EventService } from '../../../shared/event.service';
import { TakDataService } from '../../shared/tak-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './tak-add.component.html',
  styleUrls: ['./tak-add.component.scss']
})
export class TakAddComponent implements OnInit {

  public addTakFormGroup: FormGroup;

  constructor(public addModalRef: BsModalRef,
    private dataService: TakDataService,
    private fb: FormBuilder,
    private eventService: EventService,
    private snotifyService: SnotifyService
    ) { }

  ngOnInit() {
    this.addTakFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      volgorde: ['', [Validators.required, , Validators.min(1)]]

    });
  }

  onAdd() {
    const tak = {
      naam: this.addTakFormGroup.value.naam,
      volgorde: this.addTakFormGroup.value.volgorde};

    this.dataService.create(tak).subscribe(res => {
      if (res) {
        this.eventService.newTak(res);
        this.addModalRef.hide();
        this.snotifyService.success('Tak succesvol toegevoegd!');
      }
    });
  }

}
