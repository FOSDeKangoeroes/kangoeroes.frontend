import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Drank } from '../../shared/drank.model';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { Validators } from '@angular/forms';
import { DrankTypeDataService } from '../../../drank-type/shared/drank-type-data.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-content',
  templateUrl: './drank-edit.component.html',
  styleUrls: ['./drank-edit.component.scss']
})
export class DrankEditComponent implements OnInit {

  @Input() drank: Drank;

  @Output() editedDrank = new EventEmitter<Drank>();

  formConfig: FieldConfig[];

  constructor(private drankDataService: DrankTypeDataService) { }

  ngOnInit() {
    this.formConfig = [
      {
        type: 'select',
        label: 'Categorie',
        name: 'drankTypeId',
        value: this.drank.typeId,
        cssClass: 'col-12',
        dataService: this.drankDataService,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Type is verplicht'
          }
        ]
      },
      {
        type: 'input',
        label: 'Naam',
        name: 'naam',
        inputType: 'text',
        value: this.drank.naam,
        cssClass: 'col-12',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Naam is verplicht'
          }
        ]
      },
      {
        type: 'input',
        label: 'Prijs',
        inputType: 'text',
        name: 'prijs',
        value: this.drank.prijs,
        cssClass: 'col-12',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Prijs is verplicht'
          }
        ]
      },
      {
        type: 'button',
        label: 'Wijzigen',
        cssClass: 'btn btn-success col-12'
      }
    ];
  }

  onSubmit(event) {
    console.log(event);
    this.drank.naam = event.naam;
    this.drank.prijs = event.prijs;
    this.drank.typeId = event.drankTypeId;

    this.editedDrank.emit(this.drank);
  }
}
