import { Component, OnInit } from '@angular/core';
import { FieldComponentBase } from '../field-component-base';
import {FormGroup} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kangoeroe-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends FieldComponentBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
