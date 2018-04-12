import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Util } from '../util';
import { Tak } from '../../tak/tak.model';
import { Leiding } from '../leiding.model';
import { Router } from '@angular/router';
import { EventService } from '../../shared/event.service';
import { DataService } from '../../services/data.service';
import { SnotifyService } from 'ng-snotify';



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

  @Output () public newLeiding = new EventEmitter<Leiding>();
  constructor(public addLeidingModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private eventService: EventService,
    private snotifyService: SnotifyService) { }

  ngOnInit() {


    this.dataService.getTakken().subscribe(res => {
      this.takkenLoading = false;
      this.takken = res.body;

    });

    this.addLeidingFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      voornaam: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Util.emailOrEmpty([Validators.email])]],
      tak: ['', [Validators.required, Validators.min(1)]]
    });
  }

onSubmit() {
  const leiding = new Leiding(this.addLeidingFormGroup.value.naam, this.addLeidingFormGroup.value.voornaam);
  leiding.email = this.addLeidingFormGroup.value.email;
  leiding.takId = this.addLeidingFormGroup.value.tak;

  this.dataService.addLeiding(leiding).subscribe(res => {
    this.eventService.newLeiding(res);
    this.addLeidingModalRef.hide();
    this.snotifyService.success('Leiding werd succesvol aangemaakt!');

  }, error => {
    this.snotifyService.error(error.message, 'Error!');
  });

}

}
