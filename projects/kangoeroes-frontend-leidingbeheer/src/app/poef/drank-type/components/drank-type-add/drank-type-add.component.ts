import { Component, OnInit } from '@angular/core';

import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DrankTypeDataService } from '../../shared/drank-type-data.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'modal-content',
  templateUrl: './drank-type-add.component.html',
  styleUrls: ['./drank-type-add.component.scss']
})
export class DrankTypeAddComponent implements OnInit {

  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Naam',
      inputType: 'text',
      name: 'naam',
      cssClass: 'col-12',
      validations: [ {
        name: 'required',
        validator: Validators.required,
        message: 'Naam is verplicht'
      }
      ]
    },
    {
      type: 'button',
      label: 'Toevoegen',
      cssClass: 'btn btn-success col-12'
    }
  ];

 
/**
 *
 */
constructor(
  private dataService: DrankTypeDataService,
  private addModalRef: BsModalRef,
  private snotifyService: SnotifyService
  ) {

}


  ngOnInit() {
  }

 

  onSubmit(event: Event) {
    this.dataService.create(event).subscribe(res => {
      this.addModalRef.hide();
    },
    error => {
      this.snotifyService.error(error.message, 'Error!');
    });
  }

}
