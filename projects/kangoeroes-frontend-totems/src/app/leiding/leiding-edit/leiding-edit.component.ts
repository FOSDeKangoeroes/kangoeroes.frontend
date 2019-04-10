import { Component, OnInit, Input } from '@angular/core';
import { Leiding } from '../leiding.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';


@Component({
  selector: 'app-leiding-edit',
  templateUrl: './leiding-edit.component.html',
  styleUrls: ['./leiding-edit.component.scss']
})
export class LeidingEditComponent implements OnInit {

  @Input() leiding: Leiding;

  regConfig: FieldConfig[];

  constructor() { }

  ngOnInit() {

    console.log(this.leiding);
    this.regConfig = [
      {
        label: 'Datum gestopt als leiding',
        type: 'date',
        value: this.leiding.datumGestopt
      },
      {
        type: 'button',
        label: 'Wijzigen',
        cssClass: 'mat-raised-button float-right'
      }
    ];

  }

  onSubmit(event) {
    console.log(event);
  }

}
