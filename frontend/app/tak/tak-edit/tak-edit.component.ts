import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tak } from '../tak.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { EventService } from '../../shared/event.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './tak-edit.component.html',
  styleUrls: ['./tak-edit.component.scss']
})
export class TakEditComponent implements OnInit {

  // Wijzigen
  public editTakFormGroup: FormGroup;

  tak: Tak;
  naam: string;
  volgorde: number;
  takId: number;

  constructor(public editModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: DataService,
    private _router: Router,
    eventService: EventService) { 
      this.tak = eventService.activeTak;
    }

  ngOnInit() {
    this.editTakFormGroup = this.fb.group({
      naam: [this.tak.naam, [Validators.required, Validators.minLength(2)]],
      volgorde: [this.tak.volgorde, [Validators.required, , Validators.min(1)]]

    });
  }

  onSubmit() {
 this.tak.naam = this.editTakFormGroup.value.naam;
 this.tak.volgorde = this.editTakFormGroup.value.volgorde;
    this.dataService.updateTak(this.tak, this.tak.id).subscribe(res => {
      if (res) {
        this.editModalRef.hide();
      //  this._router.navigate(['takken']);
      }
    });

  }

}
