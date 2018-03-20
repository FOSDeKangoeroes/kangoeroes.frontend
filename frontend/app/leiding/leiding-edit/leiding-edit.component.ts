import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../services/data.service';
import { EventService } from '../../shared/event.service';
import { Util } from '../util';
import { Leiding } from '../leiding.model';
import { SnotifyService } from 'ng-snotify';

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
      email: [this.leiding.email, [Util.emailOrEmpty([Validators.email])]]
    });
  }

  onSubmit() {
      this.leiding.voornaam = this.editLeidingFormGroup.value.voornaam;
      this.leiding.naam = this.editLeidingFormGroup.value.naam;
      this.leiding.email = this.editLeidingFormGroup.value.email;

      this.dataService.updateLeiding(this.leiding).subscribe( res => {
        this.eventService.newLeiding(res);
        this.editLeidingModalRef.hide();
      this.snotifyService.success('Leiding succesvol gewijzigd!');
      });
  }

}
