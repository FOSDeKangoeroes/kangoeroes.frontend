import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { Validators } from '@angular/forms';
import { DrankType } from '../../shared/drank-type-model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DrankTypeService } from '../../shared/drankType.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-content',
  templateUrl: './drank-type-edit.component.html',
  styleUrls: ['./drank-type-edit.component.scss']
})
export class DrankTypeEditComponent implements OnInit {

  @Input() drankType: DrankType;

  @Output() editedType = new EventEmitter<DrankType>();

  regConfig: FieldConfig[];

  constructor(private editModalRef: BsModalRef, private drankTypeService: DrankTypeService) {
   }

  ngOnInit() {
    this.regConfig = [
      {
        type: 'input',
        label: 'Naam',
        inputType: 'text',
        name: 'naam',
        value: this.drankType.naam,
        cssClass: 'col-12',
        validations: [{
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
  }

  onSubmit(event: DrankType) {
    this.drankType.naam = event.naam;
    this.editedType.emit(this.drankType);

  }

}
