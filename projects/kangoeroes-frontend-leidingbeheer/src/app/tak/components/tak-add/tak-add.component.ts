import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { TakDataService } from '../../shared/tak-data.service';
import { EventService } from 'projects/kangoeroes-frontend-core/src/lib/data-table/event.service';

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
        this.eventService.entryChanged$.emit();
        this.addModalRef.hide();
        this.snotifyService.success('Tak succesvol toegevoegd!');
      }
    });
  }

}
