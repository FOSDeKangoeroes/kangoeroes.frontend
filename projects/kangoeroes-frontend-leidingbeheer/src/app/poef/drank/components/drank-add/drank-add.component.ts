import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DrankDataService } from '../../shared/drank-data.service';

import { SnotifyService } from 'ng-snotify';
import { EventService } from 'projects/kangoeroes-frontend-core/src/lib/data-table/event.service';
import { DrankTypeDataService } from '../../../drank-type/shared/drank-type-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './drank-add.component.html',
  styleUrls: ['./drank-add.component.scss']
})
export class DrankAddComponent implements OnInit {


  public addDrankFormGroup: FormGroup;

  constructor(
    public addDrankModalRef: BsModalRef,
    private fb: FormBuilder,
    private dataService: DrankDataService,
    public drankTypeDataService: DrankTypeDataService,
    private eventService: EventService,
    private snotifyService: SnotifyService
    ) { }

  ngOnInit() {
    this.addDrankFormGroup = this.fb.group({
      type: [, [Validators.required]],
      naam: ['', [Validators.required, Validators.minLength(1)]],
      prijs: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const drank = {
      naam: this.addDrankFormGroup.value.naam,
      prijs: this.addDrankFormGroup.value.prijs,
      typeId: this.addDrankFormGroup.value.type
    };

    this.dataService.create(drank).subscribe(res => {
      this.eventService.entryChanged$.emit();
      this.addDrankModalRef.hide();
      this.snotifyService.success('Drank werd succesvol aangemaakt!');
    }, error => {
      this.snotifyService.error(error.message, 'Error!');
    });
  }

}
